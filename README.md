# Bank of Flatiron

Author: Bilal Faruq

## Overview

Bank of Flatiron is a simple React application that allows users to manage and view their recent bank transactions. The application features a table displaying transaction details, a form to add new transactions, and a search bar for filtering transactions based on descriptions.

## Features

- View a table of all recent transactions, including date, description, category, and amount.
- Add new transactions through a simple form (transactions are not persisted to the backend).
- Filter transactions by typing into the search bar. Only transactions with descriptions matching the search term are displayed in the table.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bank-of-flatiron.git
   cd bank-of-flatiron
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the Bank of Flatiron app.

## Usage

1. The main page displays a table of your recent transactions.
2. Use the "Search Transactions" input to filter transactions by description.
3. Add a new transaction by filling out the "Add Transaction" form.
4. Click the "Add Transaction" button to submit the form and see the new transaction in the table.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The project uses Create React App for bootstrapping.
- Axios is utilized for making HTTP requests.

Feel free to explore and customize the Bank of Flatiron application as needed!