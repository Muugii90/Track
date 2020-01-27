import cucumber.api.java.sl.In;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class Utilities {
   public static WebDriver driver;

    public static WebDriver getDriver(){
        if(driver==null) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }
        return driver;
    }

    public static void closeDriver(){
        driver.close();
        driver=null;
    }
    public static String configReader(String key) {
        String value="";
        Properties properties = new Properties();
        try {
            InputStream input = new FileInputStream("/Users/Munkhnasan/IdeaProjects/CukesVytrack/Config.properties");
            properties.load(input);
            value=properties.get(key).toString();
        } catch (Exception e) {

        }
        return value;
    }

    public static void sleep(double sec){
        try {
            Thread.sleep((long) (sec * 1000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public static boolean elementDisplayed(String xpath){
        boolean displayed=false;
        try{
           WebElement element= getDriver().findElement(By.xpath(xpath));
            displayed=element.isDisplayed();
        }catch (Throwable e){
        }
        return displayed;
    }

    public static void waitElementDisplay(String xpath,int maxWaitTime){
        for(int i=0; i<maxWaitTime; i++){
            if(elementDisplayed(xpath)){
                break;
            }
            sleep(1);
            System.out.println("Waiting for "+xpath+" | "+(i+1)+" sec");
        }

    }

    public static void screenShot(){
        final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        Hooks.currentScenario.embed(screenshot, "image/png");
    }

    public static void log(String s){
        Date date=new Date();
        Hooks.currentScenario.write(date+" INFO: "+s);
    }

    public static WebElement highlight(WebElement element){
        for(int i=0; i<2; i++) {
            WrapsDriver wrappedElement = (WrapsDriver) element;
            JavascriptExecutor executor = (JavascriptExecutor) wrappedElement.getWrappedDriver();
            sleep(0.2);
            executor.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "color: blue; border: 2px solid Green;background: GreenYellow;");
            sleep(0.2);
            executor.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
        }
        return element;
    }

    public static void main(String[] args) {
        String file = "/Users/Munkhnasan/Library/Containers/com.microsoft.Excel/Data/Desktop/Book1.xlsx";
        readExcel(file,"Korea");
        readExcel("/Users/Munkhnasan/IdeaProjects/CukesVytrack/Names.xlsx", "Haku");

        //WorkBook
        //Sheet
        //Row
        //Cell
    }
    public static List<String> readExcel(String fileName,String name){
        List<String> list=new ArrayList<>();
        try {
            File file=new File(fileName);
            FileInputStream stream=new FileInputStream(file);
            XSSFWorkbook book=new XSSFWorkbook(stream);
            Sheet sheet=book.getSheet("Sheet1");

            for(int i=0; i<=sheet.getLastRowNum();i++){
                Row row=sheet.getRow(i);
                if(row==null){
                    continue;
                }
                for(int j=0; j<row.getLastCellNum(); j++){
                    if(row.getCell(0).toString().equals(name)){
                        list.add(row.getCell(j).toString());
                    }

                    }
                }
            System.out.println(list);

            //Cell cell=row.getCell(1);
           // System.out.println("==="+cell.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }
}


