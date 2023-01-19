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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/movie")
public class MovieControlleur {

	@Autowired
	private film.demo.Repository.Imovie Imovie;
	
	@GetMapping("/all")
	public List<movie> getAllmovies(){
		return Imovie.findAll();
	}		
	
	@PostMapping("/add")
	public movie createmovie(@RequestBody movie movie) {
		return Imovie.save(movie);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<movie> getmovieById(@PathVariable Long id) {
		movie movie = Imovie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("movie not exist with id :" + id));
		return ResponseEntity.ok(movie);
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<movie> updateEmployee(@PathVariable Long id, @RequestBody movie movieDetails){
		movie movie = Imovie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("movie not exist with id :" + id));
		
		movie.setName(movieDetails.getName());
		movie.setRealisateur(movieDetails.getRealisateur());
		movie.setGenre(movieDetails.getGenre());
		movie.setImg(movieDetails.getImg());
		movie moviee = Imovie.save(movie);
		return ResponseEntity.ok(moviee);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		movie movie = Imovie.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("movie not exist with id :" + id));
		
		Imovie.delete(movie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
