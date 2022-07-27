Feature: Google Search

    Scenario:   Search for snowflake

        Given I go to "https://google.com"
        When I search for "snowflake"
        Then I can see page title "snowflake - Google Search"