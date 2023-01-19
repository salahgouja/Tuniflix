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

import film.demo.Model.contact;
import film.demo.Model.movie;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contact")
public class ContactControlleur {

	@Autowired
	private film.demo.Repository.Icontact Icontact;
	
	@GetMapping("/all")
	public List<contact> getAllcontacts(){
		return Icontact.findAll();
	}		
	
	@PostMapping("/add")
	public contact createcontact(@RequestBody contact contact) {
		return Icontact.save(contact);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<contact> getcontactById(@PathVariable Long id) {
		contact contact = Icontact.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("contact not exist with id :" + id));
		return ResponseEntity.ok(contact);
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<contact> updateEmployee(@PathVariable Long id, @RequestBody contact contactDetails){
		contact contact = Icontact.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("contact not exist with id :" + id));
		
		contact.setEmail(contactDetails.getEmail());
		contact.setMessage(contactDetails.getMessage());
		contact contacte = Icontact.save(contact);
		return ResponseEntity.ok(contacte);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		contact contact = Icontact.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("contact not exist with id :" + id));
		
		Icontact.delete(contact);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}