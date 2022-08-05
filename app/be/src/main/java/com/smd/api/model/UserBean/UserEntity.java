import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserEntity {

    private int id;
    private String name;
    private int age;
    private String password;
    private String mailaddress;

}