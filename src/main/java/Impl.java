import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;


import java.util.Map;

public class Impl extends Utilities {

    WebDriver driver = getDriver();
    Page page = new Page();
    Actions action = new Actions(driver);


    public void verifyClickDropdown(String actionType, Map<String, String> map) {
        for (String each : map.keySet()) {
            String xpath = String.format(page.tabs, each);
            Utilities.waitElementDisplay(xpath, 10);
            action.moveToElement(highlight(driver.findElement(By.xpath(xpath)))).perform();
            WebElement tabXpath = driver.findElement(By.xpath(xpath));
            log(each + " is displayed: " + tabXpath.isDisplayed());
            screenShot();

            String xpath2 = String.format(page.dropdown, map.get(each));
            Utilities.waitElementDisplay(xpath2, 10);
            WebElement dropdownXpath = highlight(driver.findElement(By.xpath(xpath2)));
            log(map.get(each) + " is displayed: " + dropdownXpath.isDisplayed());

            if (actionType.equalsIgnoreCase("click")) {
                dropdownXpath.click();
            }
        }
    }

    public void clickButton(String string) {
        String xpath = String.format(page.buttons, string);
        WebElement element = driver.findElement(By.xpath(xpath));
        highlight(element).click();
    }

    public void selectDate(String date) {
//        String month = date.substring(0,4);
//        int space = date.indexOf(" ");
//        int comma = date.indexOf(", ");
//        String day = date.substring(comma);

        String xpath = String.format(page.date, "1");
        Utilities.waitElementDisplay(xpath, 10);
        WebElement el = driver.findElement(By.xpath(xpath));
        el.clear();
        el.sendKeys(date);
        //  el.sendKeys(Keys.chord(Keys.COMMAND,"a"));
        // action.moveToElement(el).click().keyDown(Keys.COMMAND).keyDown("A").sendKeys(Keys.DELETE).perform();
        sleep(20);
        //action.sendKeys(date).perform();
    }
    public void verifyDate(String expected){

        String xpath = String.format(page.date,"3");
        Utilities.waitElementDisplay(xpath, 10);
        WebElement element = driver.findElement(By.xpath(xpath));
        
        String actual = element.getText();
        System.out.println("actual = " + actual);
        //Assert.assertEquals(expected, actual);

    }


}
