{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "<p style=\"text-align:center\">\n",
    "    <a href=\"https://skills.network\" target=\"_blank\">\n",
    "    <img src=\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/assets/logos/SN_web_lightmode.png\" width=\"200\" alt=\"Skills Network Logo\">\n",
    "    </a>\n",
    "</p>\n",
    "\n",
    "<h1 align=center><font size = 5>Assignment: SQL Notebook for Peer Assignment</font></h1>\n",
    "\n",
    "Estimated time needed: **60** minutes.\n",
    "\n",
    "## Introduction\n",
    "Using this Python notebook you will:\n",
    "\n",
    "1.  Understand the Spacex DataSet\n",
    "2.  Load the dataset  into the corresponding table in a Db2 database\n",
    "3.  Execute SQL queries to answer assignment questions \n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Overview of the DataSet\n",
    "\n",
    "SpaceX has gained worldwide attention for a series of historic milestones. \n",
    "\n",
    "It is the only private company ever to return a spacecraft from low-earth orbit, which it first accomplished in December 2010.\n",
    "SpaceX advertises Falcon 9 rocket launches on its website with a cost of 62 million dollars wheras other providers cost upward of 165 million dollars each, much of the savings is because Space X can reuse the first stage. \n",
    "\n",
    "\n",
    "Therefore if we can determine if the first stage will land, we can determine the cost of a launch. \n",
    "\n",
    "This information can be used if an alternate company wants to bid against SpaceX for a rocket launch.\n",
    "\n",
    "This dataset includes a record for each payload carried during a SpaceX mission into outer space.\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Download the datasets\n",
    "\n",
    "This assignment requires you to load the spacex dataset.\n",
    "\n",
    "In many cases the dataset to be analyzed is available as a .CSV (comma separated values) file, perhaps on the internet. Click on the link below to download and save the dataset (.CSV file):\n",
    "\n",
    " <a href=\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-DS0321EN-SkillsNetwork/labs/module_2/data/Spacex.csv\" target=\"_blank\">Spacex DataSet</a>\n",
    "\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Collecting sqlalchemy==1.3.9\n",
      "  Downloading SQLAlchemy-1.3.9.tar.gz (6.0 MB)\n",
      "\u001b[2K     \u001b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\u001b[0m \u001b[32m6.0/6.0 MB\u001b[0m \u001b[31m77.7 MB/s\u001b[0m eta \u001b[36m0:00:00\u001b[0m:00:01\u001b[0m00:01\u001b[0m\n",
      "\u001b[?25h  Preparing metadata (setup.py) ... \u001b[?25ldone\n",
      "\u001b[?25hBuilding wheels for collected packages: sqlalchemy\n",
      "  Building wheel for sqlalchemy (setup.py) ... \u001b[?25ldone\n",
      "\u001b[?25h  Created wheel for sqlalchemy: filename=SQLAlchemy-1.3.9-cp37-cp37m-linux_x86_64.whl size=1159121 sha256=b39c02f33bc166415936e5dde3c054a24c09ceda84289779f7c3316cca2c0da9\n",
      "  Stored in directory: /home/jupyterlab/.cache/pip/wheels/03/71/13/010faf12246f72dc76b4150e6e599d13a85b4435e06fb9e51f\n",
      "Successfully built sqlalchemy\n",
      "Installing collected packages: sqlalchemy\n",
      "  Attempting uninstall: sqlalchemy\n",
      "    Found existing installation: SQLAlchemy 1.3.24\n",
      "    Uninstalling SQLAlchemy-1.3.24:\n",
      "      Successfully uninstalled SQLAlchemy-1.3.24\n",
      "Successfully installed sqlalchemy-1.3.9\n"
     ]
    }
   ],
   "source": [
    "!pip install sqlalchemy==1.3.9\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Connect to the database\n",
    "\n",
    "Let us first load the SQL extension and establish a connection with the database\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "%load_ext sql"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "import csv, sqlite3\n",
    "\n",
    "con = sqlite3.connect(\"my_data1.db\")\n",
    "cur = con.cursor()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "!pip install -q pandas==1.1.5"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'Connected: @my_data1.db'"
      ]
     },
     "execution_count": 5,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql sqlite:///my_data1.db"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "/home/jupyterlab/conda/envs/python/lib/python3.7/site-packages/pandas/core/generic.py:2882: UserWarning: The spaces in these column names will not be changed. In pandas versions < 0.14, spaces were converted to underscores.\n",
      "  both result in 0.1234 being formatted as 0.12.\n"
     ]
    }
   ],
   "source": [
    "import pandas as pd\n",
    "df = pd.read_csv(\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-DS0321EN-SkillsNetwork/labs/module_2/data/Spacex.csv\")\n",
    "df.to_sql(\"SPACEXTBL\", con, if_exists='replace', index=False,method=\"multi\")"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "**Note:This below code is added to remove blank rows from table**\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "[]"
      ]
     },
     "execution_count": 7,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql create table SPACEXTABLE as select * from SPACEXTBL where Date is not null"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Tasks\n",
    "\n",
    "Now write and execute SQL queries to solve the assignment tasks.\n",
    "\n",
    "**Note: If the column names are in mixed case enclose it in double quotes\n",
    "   For Example \"Landing_Outcome\"**\n",
    "\n",
    "### Task 1\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "##### Display the names of the unique launch sites  in the space mission\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Launch_Site</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>CCAFS LC-40</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>VAFB SLC-4E</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>KSC LC-39A</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('CCAFS LC-40',), ('VAFB SLC-4E',), ('KSC LC-39A',), ('CCAFS SLC-40',)]"
      ]
     },
     "execution_count": 9,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT DISTINCT \"Launch_Site\" FROM SPACEXTBL"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "\n",
    "### Task 2\n",
    "\n",
    "\n",
    "#####  Display 5 records where launch sites begin with the string 'CCA' \n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Date</th>\n",
       "            <th>Time (UTC)</th>\n",
       "            <th>Booster_Version</th>\n",
       "            <th>Launch_Site</th>\n",
       "            <th>Payload</th>\n",
       "            <th>PAYLOAD_MASS__KG_</th>\n",
       "            <th>Orbit</th>\n",
       "            <th>Customer</th>\n",
       "            <th>Mission_Outcome</th>\n",
       "            <th>Landing_Outcome</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>2010-04-06</td>\n",
       "            <td>18:45:00</td>\n",
       "            <td>F9 v1.0  B0003</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>Dragon Spacecraft Qualification Unit</td>\n",
       "            <td>0</td>\n",
       "            <td>LEO</td>\n",
       "            <td>SpaceX</td>\n",
       "            <td>Success</td>\n",
       "            <td>Failure (parachute)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2010-08-12</td>\n",
       "            <td>15:43:00</td>\n",
       "            <td>F9 v1.0  B0004</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>Dragon demo flight C1, two CubeSats, barrel of Brouere cheese</td>\n",
       "            <td>0</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (COTS) NRO</td>\n",
       "            <td>Success</td>\n",
       "            <td>Failure (parachute)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2012-05-22</td>\n",
       "            <td>07:44:00</td>\n",
       "            <td>F9 v1.0  B0005</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>Dragon demo flight C2</td>\n",
       "            <td>525</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (COTS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2012-08-10</td>\n",
       "            <td>00:35:00</td>\n",
       "            <td>F9 v1.0  B0006</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-1</td>\n",
       "            <td>500</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2013-01-03</td>\n",
       "            <td>15:10:00</td>\n",
       "            <td>F9 v1.0  B0007</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-2</td>\n",
       "            <td>677</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('2010-04-06', '18:45:00', 'F9 v1.0  B0003', 'CCAFS LC-40', 'Dragon Spacecraft Qualification Unit', 0, 'LEO', 'SpaceX', 'Success', 'Failure (parachute)'),\n",
       " ('2010-08-12', '15:43:00', 'F9 v1.0  B0004', 'CCAFS LC-40', 'Dragon demo flight C1, two CubeSats, barrel of Brouere cheese', 0, 'LEO (ISS)', 'NASA (COTS) NRO', 'Success', 'Failure (parachute)'),\n",
       " ('2012-05-22', '07:44:00', 'F9 v1.0  B0005', 'CCAFS LC-40', 'Dragon demo flight C2', 525, 'LEO (ISS)', 'NASA (COTS)', 'Success', 'No attempt'),\n",
       " ('2012-08-10', '00:35:00', 'F9 v1.0  B0006', 'CCAFS LC-40', 'SpaceX CRS-1', 500, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt'),\n",
       " ('2013-01-03', '15:10:00', 'F9 v1.0  B0007', 'CCAFS LC-40', 'SpaceX CRS-2', 677, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt')]"
      ]
     },
     "execution_count": 10,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT * FROM SPACEXTBL WHERE LAUNCH_SITE LIKE'CCA%' LIMIT 5;"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 3\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "##### Display the total payload mass carried by boosters launched by NASA (CRS)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Date</th>\n",
       "            <th>Time (UTC)</th>\n",
       "            <th>Booster_Version</th>\n",
       "            <th>Launch_Site</th>\n",
       "            <th>Payload</th>\n",
       "            <th>PAYLOAD_MASS__KG_</th>\n",
       "            <th>Orbit</th>\n",
       "            <th>Customer</th>\n",
       "            <th>Mission_Outcome</th>\n",
       "            <th>Landing_Outcome</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>2012-08-10</td>\n",
       "            <td>00:35:00</td>\n",
       "            <td>F9 v1.0  B0006</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-1</td>\n",
       "            <td>500</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2013-01-03</td>\n",
       "            <td>15:10:00</td>\n",
       "            <td>F9 v1.0  B0007</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-2</td>\n",
       "            <td>677</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2014-04-18</td>\n",
       "            <td>19:25:00</td>\n",
       "            <td>F9 v1.1</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-3</td>\n",
       "            <td>2296</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Controlled (ocean)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2014-09-21</td>\n",
       "            <td>05:52:00</td>\n",
       "            <td>F9 v1.1 B1010</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-4</td>\n",
       "            <td>2216</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Uncontrolled (ocean)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2015-10-01</td>\n",
       "            <td>09:47:00</td>\n",
       "            <td>F9 v1.1 B1012</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-5</td>\n",
       "            <td>2395</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Failure (drone ship)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2015-04-14</td>\n",
       "            <td>20:10:00</td>\n",
       "            <td>F9 v1.1 B1015</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-6</td>\n",
       "            <td>1898</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Failure (drone ship)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2015-06-28</td>\n",
       "            <td>14:21:00</td>\n",
       "            <td>F9 v1.1 B1018</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-7</td>\n",
       "            <td>1952</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Failure (in flight)</td>\n",
       "            <td>Precluded (drone ship)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2016-08-04</td>\n",
       "            <td>20:43:00</td>\n",
       "            <td>F9 FT B1021.1</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-8</td>\n",
       "            <td>3136</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (drone ship)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2016-07-18</td>\n",
       "            <td>04:45:00</td>\n",
       "            <td>F9 FT B1025.1</td>\n",
       "            <td>CCAFS LC-40</td>\n",
       "            <td>SpaceX CRS-9</td>\n",
       "            <td>2257</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (ground pad)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2017-02-19</td>\n",
       "            <td>14:39:00</td>\n",
       "            <td>F9 FT B1031.1</td>\n",
       "            <td>KSC LC-39A</td>\n",
       "            <td>SpaceX CRS-10</td>\n",
       "            <td>2490</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (ground pad)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2017-03-06</td>\n",
       "            <td>21:07:00</td>\n",
       "            <td>F9 FT B1035.1</td>\n",
       "            <td>KSC LC-39A</td>\n",
       "            <td>SpaceX CRS-11</td>\n",
       "            <td>2708</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (ground pad)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2017-08-14</td>\n",
       "            <td>16:31:00</td>\n",
       "            <td>F9 B4 B1039.1</td>\n",
       "            <td>KSC LC-39A</td>\n",
       "            <td>SpaceX CRS-12</td>\n",
       "            <td>3310</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (ground pad)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2017-12-15</td>\n",
       "            <td>15:36:00</td>\n",
       "            <td>F9 FT  B1035.2</td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-13</td>\n",
       "            <td>2205</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success (ground pad)</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2018-02-04</td>\n",
       "            <td>20:30:00</td>\n",
       "            <td>F9 B4  B1039.2</td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-14</td>\n",
       "            <td>2647</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2018-06-29</td>\n",
       "            <td>09:42:00</td>\n",
       "            <td>F9 B4 B1045.2</td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-15</td>\n",
       "            <td>2697</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>No attempt</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2018-05-12</td>\n",
       "            <td>18:16:00</td>\n",
       "            <td>F9 B5B1050</td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-16</td>\n",
       "            <td>2500</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Failure</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2019-04-05</td>\n",
       "            <td>06:48:00</td>\n",
       "            <td>F9 B5B1056.1 </td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-17, Starlink v0.9</td>\n",
       "            <td>2495</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2019-07-25</td>\n",
       "            <td>22:01:00</td>\n",
       "            <td>F9 B5 B1056.2 </td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-18, AMOS-17 </td>\n",
       "            <td>2268</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2020-07-03</td>\n",
       "            <td>04:50:00</td>\n",
       "            <td>F9 B5 B1059.2</td>\n",
       "            <td>CCAFS SLC-40</td>\n",
       "            <td>SpaceX CRS-20, Starlink 5 v1.0 </td>\n",
       "            <td>1977</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>2020-06-12</td>\n",
       "            <td>16:17:08</td>\n",
       "            <td>F9 B5 B1058.4 </td>\n",
       "            <td>KSC LC-39A</td>\n",
       "            <td>SpaceX CRS-21</td>\n",
       "            <td>2972</td>\n",
       "            <td>LEO (ISS)</td>\n",
       "            <td>NASA (CRS)</td>\n",
       "            <td>Success</td>\n",
       "            <td>Success</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('2012-08-10', '00:35:00', 'F9 v1.0  B0006', 'CCAFS LC-40', 'SpaceX CRS-1', 500, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt'),\n",
       " ('2013-01-03', '15:10:00', 'F9 v1.0  B0007', 'CCAFS LC-40', 'SpaceX CRS-2', 677, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt'),\n",
       " ('2014-04-18', '19:25:00', 'F9 v1.1', 'CCAFS LC-40', 'SpaceX CRS-3', 2296, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Controlled (ocean)'),\n",
       " ('2014-09-21', '05:52:00', 'F9 v1.1 B1010', 'CCAFS LC-40', 'SpaceX CRS-4', 2216, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Uncontrolled (ocean)'),\n",
       " ('2015-10-01', '09:47:00', 'F9 v1.1 B1012', 'CCAFS LC-40', 'SpaceX CRS-5', 2395, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Failure (drone ship)'),\n",
       " ('2015-04-14', '20:10:00', 'F9 v1.1 B1015', 'CCAFS LC-40', 'SpaceX CRS-6', 1898, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Failure (drone ship)'),\n",
       " ('2015-06-28', '14:21:00', 'F9 v1.1 B1018', 'CCAFS LC-40', 'SpaceX CRS-7', 1952, 'LEO (ISS)', 'NASA (CRS)', 'Failure (in flight)', 'Precluded (drone ship)'),\n",
       " ('2016-08-04', '20:43:00', 'F9 FT B1021.1', 'CCAFS LC-40', 'SpaceX CRS-8', 3136, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (drone ship)'),\n",
       " ('2016-07-18', '04:45:00', 'F9 FT B1025.1', 'CCAFS LC-40', 'SpaceX CRS-9', 2257, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (ground pad)'),\n",
       " ('2017-02-19', '14:39:00', 'F9 FT B1031.1', 'KSC LC-39A', 'SpaceX CRS-10', 2490, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (ground pad)'),\n",
       " ('2017-03-06', '21:07:00', 'F9 FT B1035.1', 'KSC LC-39A', 'SpaceX CRS-11', 2708, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (ground pad)'),\n",
       " ('2017-08-14', '16:31:00', 'F9 B4 B1039.1', 'KSC LC-39A', 'SpaceX CRS-12', 3310, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (ground pad)'),\n",
       " ('2017-12-15', '15:36:00', 'F9 FT  B1035.2', 'CCAFS SLC-40', 'SpaceX CRS-13', 2205, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success (ground pad)'),\n",
       " ('2018-02-04', '20:30:00', 'F9 B4  B1039.2', 'CCAFS SLC-40', 'SpaceX CRS-14', 2647, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt'),\n",
       " ('2018-06-29', '09:42:00', 'F9 B4 B1045.2', 'CCAFS SLC-40', 'SpaceX CRS-15', 2697, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'No attempt'),\n",
       " ('2018-05-12', '18:16:00', 'F9 B5B1050', 'CCAFS SLC-40', 'SpaceX CRS-16', 2500, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Failure'),\n",
       " ('2019-04-05', '06:48:00', 'F9 B5B1056.1 ', 'CCAFS SLC-40', 'SpaceX CRS-17, Starlink v0.9', 2495, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success'),\n",
       " ('2019-07-25', '22:01:00', 'F9 B5 B1056.2 ', 'CCAFS SLC-40', 'SpaceX CRS-18, AMOS-17 ', 2268, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success'),\n",
       " ('2020-07-03', '04:50:00', 'F9 B5 B1059.2', 'CCAFS SLC-40', 'SpaceX CRS-20, Starlink 5 v1.0 ', 1977, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success'),\n",
       " ('2020-06-12', '16:17:08', 'F9 B5 B1058.4 ', 'KSC LC-39A', 'SpaceX CRS-21', 2972, 'LEO (ISS)', 'NASA (CRS)', 'Success', 'Success')]"
      ]
     },
     "execution_count": 12,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT * FROM SPACEXTBL WHERE Customer= \"NASA (CRS)\""
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 4\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "##### Display average payload mass carried by booster version F9 v1.1\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>AVG (PAYLOAD_MASS__KG_)</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>2928.4</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[(2928.4,)]"
      ]
     },
     "execution_count": 17,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT AVG (PAYLOAD_MASS__KG_) FROM SPACEXTBL WHERE Booster_Version = \"F9 v1.1\";"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 5\n",
    "\n",
    "##### List the date when the first succesful landing outcome in ground pad was acheived.\n",
    "\n",
    "\n",
    "_Hint:Use min function_ \n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 20,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>MIN(DATE)</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>2015-12-22</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('2015-12-22',)]"
      ]
     },
     "execution_count": 20,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT MIN(DATE)FROM SPACEXTBL WHERE Landing_Outcome = 'Success (ground pad)'"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 6\n",
    "\n",
    "##### List the names of the boosters which have success in drone ship and have payload mass greater than 4000 but less than 6000\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 22,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Payload</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>JCSAT-14</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>JCSAT-16</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>SES-10</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>SES-11 / EchoStar 105</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('JCSAT-14',), ('JCSAT-16',), ('SES-10',), ('SES-11 / EchoStar 105',)]"
      ]
     },
     "execution_count": 22,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT PAYLOAD FROM SPACEXTBL WHERE Landing_Outcome = 'Success (drone ship)' AND PAYLOAD_MASS__KG_ BETWEEN 4000 AND 6000;"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 7\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "##### List the total number of successful and failure mission outcomes\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 23,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Mission_Outcome</th>\n",
       "            <th>TOTALS</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>Failure (in flight)</td>\n",
       "            <td>1</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>Success</td>\n",
       "            <td>98</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>Success </td>\n",
       "            <td>1</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>Success (payload status unclear)</td>\n",
       "            <td>1</td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('Failure (in flight)', 1),\n",
       " ('Success', 98),\n",
       " ('Success ', 1),\n",
       " ('Success (payload status unclear)', 1)]"
      ]
     },
     "execution_count": 23,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT MISSION_OUTCOME, COUNT(*) as TOTALS FROM SPACEXTBL \\\n",
    "GROUP BY MISSION_OUTCOME;"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 8\n",
    "\n",
    "\n",
    "\n",
    "##### List the   names of the booster_versions which have carried the maximum payload mass. Use a subquery\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 24,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>Booster_Version</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1048.4</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1049.4</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1051.3</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1056.4</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1048.5</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1051.4</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1049.5</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1060.2 </td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1058.3 </td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1051.6</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1060.3</td>\n",
       "        </tr>\n",
       "        <tr>\n",
       "            <td>F9 B5 B1049.7 </td>\n",
       "        </tr>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[('F9 B5 B1048.4',),\n",
       " ('F9 B5 B1049.4',),\n",
       " ('F9 B5 B1051.3',),\n",
       " ('F9 B5 B1056.4',),\n",
       " ('F9 B5 B1048.5',),\n",
       " ('F9 B5 B1051.4',),\n",
       " ('F9 B5 B1049.5',),\n",
       " ('F9 B5 B1060.2 ',),\n",
       " ('F9 B5 B1058.3 ',),\n",
       " ('F9 B5 B1051.6',),\n",
       " ('F9 B5 B1060.3',),\n",
       " ('F9 B5 B1049.7 ',)]"
      ]
     },
     "execution_count": 24,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT BOOSTER_VERSION FROM SPACEXTBL WHERE PAYLOAD_MASS__KG_ = (SELECT MAX(PAYLOAD_MASS__KG_) FROM SPACEXTBL);"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 9\n",
    "\n",
    "\n",
    "##### List the records which will display the month names, failure landing_outcomes in drone ship ,booster versions, launch_site for the months in year 2015.\n",
    "\n",
    "**Note: SQLLite does not support monthnames. So you need to use  substr(Date, 4, 2) as month to get the months and substr(Date,7,4)='2015' for year.**\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 29,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>month</th>\n",
       "            <th>Date</th>\n",
       "            <th>Booster_Version</th>\n",
       "            <th>Launch_Site</th>\n",
       "            <th>Landing_Outcome</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[]"
      ]
     },
     "execution_count": 29,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT substr(Date,4,2) as month, DATE,Booster_Version, Launch_Site, [Landing_Outcome]FROM SPACEXTBL where [Landing_Outcome] = 'Failure (drone ship)' and substr(Date,7,4)='2015';"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Task 10\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "##### Rank the count of landing outcomes (such as Failure (drone ship) or Success (ground pad)) between the date 2010-06-04 and 2017-03-20, in descending order.\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 30,
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * sqlite:///my_data1.db\n",
      "Done.\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "    <thead>\n",
       "        <tr>\n",
       "            <th>month</th>\n",
       "            <th>Date</th>\n",
       "            <th>Booster_Version</th>\n",
       "            <th>Launch_Site</th>\n",
       "            <th>Landing_Outcome</th>\n",
       "        </tr>\n",
       "    </thead>\n",
       "    <tbody>\n",
       "    </tbody>\n",
       "</table>"
      ],
      "text/plain": [
       "[]"
      ]
     },
     "execution_count": 30,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%sql SELECT substr(Date,4,2) as month, DATE,Booster_Version, Launch_Site, [Landing_Outcome] \\\n",
    "FROM SPACEXTBL \\\n",
    "where [Landing_Outcome] = 'Failure (drone ship)' and substr(Date,7,4)='2015';"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "### Reference Links\n",
    "\n",
    "* <a href =\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/Labs_Coursera_V5/labs/Lab%20-%20String%20Patterns%20-%20Sorting%20-%20Grouping/instructional-labs.md.html?origin=www.coursera.org\">Hands-on Lab : String Patterns, Sorting and Grouping</a>  \n",
    "\n",
    "*  <a  href=\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/Labs_Coursera_V5/labs/Lab%20-%20Built-in%20functions%20/Hands-on_Lab__Built-in_Functions.md.html?origin=www.coursera.org\">Hands-on Lab: Built-in functions</a>\n",
    "\n",
    "*  <a  href=\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/Labs_Coursera_V5/labs/Lab%20-%20Sub-queries%20and%20Nested%20SELECTs%20/instructional-labs.md.html?origin=www.coursera.org\">Hands-on Lab : Sub-queries and Nested SELECT Statements</a>\n",
    "\n",
    "*   <a href=\"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/Module%205/DB0201EN-Week3-1-3-SQLmagic.ipynb\">Hands-on Tutorial: Accessing Databases with SQL magic</a>\n",
    "\n",
    "*  <a href= \"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/Module%205/DB0201EN-Week3-1-4-Analyzing.ipynb\">Hands-on Lab: Analyzing a real World Data Set</a>\n",
    "\n",
    "\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Author(s)\n",
    "\n",
    "<h4> Lakshmi Holla </h4>\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Other Contributors\n",
    "\n",
    "<h4> Rav Ahuja </h4>\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Change log\n",
    "| Date | Version | Changed by | Change Description |\n",
    "|------|--------|--------|---------|\n",
    "| 2021-07-09 | 0.2 |Lakshmi Holla | Changes made in magic sql|\n",
    "| 2021-05-20 | 0.1 |Lakshmi Holla | Created Initial Version |\n"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## <h3 align=\"center\"> © IBM Corporation 2021. All rights reserved. <h3/>\n"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python",
   "language": "python",
   "name": "conda-env-python-py"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.12"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}