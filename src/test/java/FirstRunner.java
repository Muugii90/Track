import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {"html:target/reports",
                "rerun:target/Failed/rerun.txt:"},
        features = {"/Users/Munkhnasan/IdeaProjects/CukesVytrack/src/main/resources"},
        //features = {"@target/Failed/rerun.txt"},
      tags = {"@testtest"},
        dryRun = false

)
public class FirstRunner {

    }

