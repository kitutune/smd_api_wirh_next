import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserEntity {
    @NotNull
    private int id;
    @NotNull
    private String name;
    private int age;
    private String password;
    private String mailaddress;

}