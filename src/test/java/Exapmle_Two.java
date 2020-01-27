import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Exapmle_Two {

//        WebDriver driver=Utilities.getDriver();
//        driver.get("https://www.amazon.com/");
//
//        Select select =new Select(driver.findElement(By.xpath("//select[@id='searchDropdownBox']")));
//        select.selectByVisibleText("Amazon Fresh");
//        select.selectByIndex(2);
//
//       List<WebElement> list= select.getOptions();
//        System.out.println("Select size: "+list.size());
//        System.out.println();
//       for(WebElement each: list){
//           System.out.println(each.getText());
//       }
//        driver.quit();
public static void main(String[] args) {

    String url = "www.amazon.com";

    System.setProperty("webdriver.firefox.marionette","C:\\geckodriver.exe");
    WebDriver driver = new ChromeDriver();
    //comment the above 2 lines and uncomment below 2 lines to use Chrome
    //System.setProperty("webdriver.chrome.driver","G:\\chromedriver.exe");
    //WebDriver driver = new ChromeDriver();
    String search_button = "//input[@id='twotabsearchtextbox']";

    String baseUrl = "http://demo.guru99.com/test/newtours/";
    String expectedTitle = "Welcome: Mercury Tours";
    String actualTitle = "";

    // launch Fire fox and direct it to the Base URL
    driver.get(baseUrl);

    // get the actual value of the title
    actualTitle = driver.getTitle();

    /*
     * compare the actual title of the page with the expected one and print
     * the result as "Passed" or "Failed"
     */
    if (actualTitle.contentEquals(expectedTitle)){
        System.out.println("Test Passed!");
    } else {
        System.out.println("Test Failed");
    }

    //close Fire fox
    driver.close();

}

}



