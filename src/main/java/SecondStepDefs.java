import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;


public class SecondStepDefs extends Utilities{
    WebDriver driver = getDriver();
    Page page = new Page();
    Actions action = new Actions(driver);

    @Then("I should logout")
    public void iShouldLogout() {
        sleep(3);
        highlight(driver.findElement(By.xpath(page.logoutCaret))).click();
        sleep(4);
        highlight(driver.findElement(By.xpath(page.logoutButton))).click();
        sleep(3);
    }

    @And("verify I in new login page")
    public void verifyIInNewLoginPage(String expectedTitle) {
        sleep(3);
        //String actualTitle = highlight(driver.findElement(By.)).getText();
//        System.out.println(actualTitle);
//        System.out.println(expectedTitle);
//        Assert.assertEquals(expectedTitle, actualTitle);

    }
}

