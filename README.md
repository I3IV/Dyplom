# Xplus Direct Data Migration
 The XPLUS Direct data migration (XDDM) is an original addition to the Microsoft Dynamics 365 for Finance and Operations system, which implements functionalities presented below:
1.	Export
	·  Export data to a temporary file on the server
	·  Save the exported file to disk 
	·  Create export table groups
	·  Use of the system query framework to define export criteria for individual tables
	·  The selection of companies that should be considered during the tables exported
### 2.	Import
	.  Import to the database based on a file located on the server (URL must be provided)
	.  Load a file from the disk and then perform an import operation
	.  Creating a copy of target tables before the import operation 
	.  Replacing existing data with records from the imported file
	.  Updating existing data based on the imported file (option to select the index on the basis of which the update is made)
## TODO
	.  File compression during export operation
	.  Option to import compressed files
    .  Log of performed operations
	.  Progress bar for import and export operations
	.  Option to use cloud storage for exported files and import directly from cloud storage
	.  Preview of exported file in Table Browser
	.  Export/Import of big files (over 2GB)
