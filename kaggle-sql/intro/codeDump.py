from google.cloud import bigquery

client = bigquery.Client()

#Referencia pro dataset hacker_news
dataset_ref = client.dataset("hacker_news", project="bigquery-public-data")

# API request - fetch the dataset
dataset = client.get_dataset(dataset_ref)

# Listar as tabelas do dataset
tables = list(client.list_tables(dataset))

# Printar os nomes das tabelas do dataset
for table in tables:
  print(table.table_id)

query = """"""
# Set up the query (cancel the query if it would use too much of 
# your quota, with the limit set to 1 GB)
safe_config = bigquery.QueryJobConfig(maximum_bytes_billed=10**9)
query_job = client.query(query, job_config=safe_config)

# API request - run the query, and convert the results to a pandas DataFrame
query_panda = query_job.to_dataframe()

# Print the DataFrame
query_panda
