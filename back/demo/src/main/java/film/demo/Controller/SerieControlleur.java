package film.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import film.demo.Model.movie;
import film.demo.Model.serie;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/serie")
public class SerieControlleur {

	@Autowired
	private film.demo.Repository.Iserie Iserie;
	
	@GetMapping("/all")
	public List<serie> getAllseries(){
		return Iserie.findAll();
	}		
	
	@PostMapping("/add")
	public serie createserie(@RequestBody serie serie) {
		return Iserie.save(serie);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<serie> getserieById(@PathVariable Long id) {
		serie serie = Iserie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("serie not exist with id :" + id));
		return ResponseEntity.ok(serie);
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<serie> updateEmployee(@PathVariable Long id, @RequestBody serie serieDetails){
		serie serie = Iserie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("serie not exist with id :" + id));
		
		serie.setName(serieDetails.getName());
		serie.setRealisateur(serieDetails.getRealisateur());
		serie.setGenre(serieDetails.getGenre());
		serie.setImg(serieDetails.getImg());
		serie seriee = Iserie.save(serie);
		return ResponseEntity.ok(seriee);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		serie serie = Iserie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("serie not exist with id :" + id));
		
		Iserie.delete(serie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
