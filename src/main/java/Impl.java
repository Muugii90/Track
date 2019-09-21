import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;


import java.util.Map;

public class Impl extends Utilities {

    WebDriver driver = getDriver();
    Page page = new Page();
    Actions action = new Actions(driver);


    public void verifyClickDropdown(String actionType,Map<String, String> map){
        for (String each : map.keySet()) {
            String xpath = String.format(page.tabs, each);
            Utilities.waitElementDisplay(xpath,10);
            action.moveToElement(highlight(driver.findElement(By.xpath(xpath)))).perform();
            WebElement tabXpath = driver.findElement(By.xpath(xpath));
            log(each + " is displayed: " + tabXpath.isDisplayed());
            screenShot();

            String xpath2 = String.format(page.dropdown, map.get(each));
            Utilities.waitElementDisplay(xpath2,10);
            WebElement dropdownXpath = highlight(driver.findElement(By.xpath(xpath2)));
            log(map.get(each) + " is displayed: " + dropdownXpath.isDisplayed());

            if(actionType.equalsIgnoreCase("click")){
                dropdownXpath.click();
            }



        }
    }
}
