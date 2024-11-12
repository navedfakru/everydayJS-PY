from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService
import time
from selenium.webdriver.common.by import By
import csv

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get("https://www.iadfrance.fr/trouver-un-conseiller/ile-de-france")

time.sleep(5)


icons = driver.find_elements(By.XPATH, '//*[@id="js--more-results"]/div[1]')

for i in range(200):
  for icon in icons:
    icon.click()
    time.sleep(2)

driver.close()