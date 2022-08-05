import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserForm {
    @NotNull
    private int id;
    @NotNull
    private String name;
    @Min(0)
    @Max(150)
    private int age;
    @Size(min = 3, max = 10)
    private String password;
    @Email
    private String mailaddress;

}