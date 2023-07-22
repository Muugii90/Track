import cucumber.api.Scenario;
        import cucumber.api.java.After;
        import cucumber.api.java.Before;

public class Hooks extends Utilities {
    public static Scenario currentScenario;

    @Before
    public static void setUp(Scenario s) {
        currentScenario = s;
    }

    @After
    public static void tearDown() {
        closeDriver();
    }

}
