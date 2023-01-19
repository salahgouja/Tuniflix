package film.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import film.demo.Model.movie;
import film.demo.Model.serie;

@Repository
public interface Iserie extends JpaRepository<serie, Long>{

}
