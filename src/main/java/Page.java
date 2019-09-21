import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page {

    public Page(){
        PageFactory.initElements(Utilities.getDriver(),this);
    }

//    @FindBy (xpath="//input[@id='prependedInput']")
//    public static WebElement userNameInput;
//
//    @FindBy (xpath="//input[@id='prependedInput2']")
//    public static WebElement passwordInput;
//
//    @FindBy (xpath="//button[@id='_submit']")
//    public static WebElement submitButton;

    public static String userNameInput= "//input[@id='prependedInput']";
    public static String passwordInput ="//input[@id='prependedInput2']";
    public static String submitButton ="//button[@id='_submit']";
    public static String tabs="//span[@class='title title-level-1' and contains(text(),'%s')]";
    public static String dropdown = "//span[@class='title title-level-2'and contains(text(),'%s')]";
    public static String carsList = "//table[@class='grid table-hover table table-bordered table-condensed']//th/a/span[1]";
    public static String tableRowInfo ="(//table[@class='grid table-hover table table-bordered table-condensed']//tr)[%s]";
    public static String userNameVerify ="//li[@class='dropdown user-menu-dropdown']";
    public static String logoutCaret ="//i[@class='fa-caret-down']";
    public static String logoutButton ="//a[@class='no-hash']";
    public static String buttons="//div[@class='btn-group']//a[contains(text(),'%s')]";



}
