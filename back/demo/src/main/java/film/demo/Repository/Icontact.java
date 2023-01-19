package film.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import film.demo.Model.contact;
import film.demo.Model.movie;

@Repository
public interface Icontact extends JpaRepository<contact, Long>{

}
