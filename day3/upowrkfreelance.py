from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
import csv
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService

# Initialize the Chrome WebDriver
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

# Open the target URL
driver.get("https://www.iadfrance.fr/trouver-un-conseiller/ile-de-france")

data = []

def load_limited_data(click_limit=10):
    click_count = 0

    while click_count < click_limit:
        try:
            # Wait for the "Show More" button to be clickable
            show_more_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.ID, "js--more-results"))
            )
            # Click the button
            ActionChains(driver).move_to_element(show_more_button).click(show_more_button).perform()
            
            # Increment the click counter
            click_count += 1
            print(f"Clicked 'Show More' button {click_count} times")
            
            # Wait for new data to load before the next click
            time.sleep(2)
        
        except TimeoutException:
            print("No more 'Show More' button to click or timed out.")
            break

# Call the function to load data with a limit of 10 clicks
load_limited_data(click_limit=100)

# After loading data, extract the information using dynamic XPath
def extract_agent_data():
    agents = driver.find_elements(By.XPATH, "//a[contains(@class, 'agent_name')]")
    for agent in agents:
        print("Agent Name:", agent.text)
        print("Agent Profile URL:", agent.get_attribute("href"))
        data.append([agent.text, agent.get_attribute("href")])

# Extract and print the data
extract_agent_data()

# Close the browser
driver.quit()


with open('iadfrance.csv', 'w', newline='', encoding='utf-8') as csvfile:
  writer = csv.writer(csvfile)
  writer.writerow(["Agent Name", "Agent Profile URL"])
  writer.writerows(data)

print("Your Data is ready")
