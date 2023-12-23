# Warp UUID Generator

## What it does:

Generates unique identifiers (UUIDs) specifically with Warp SDK.

Uses a special feature called the VRF Plugin to make sure each UUID is truly one-of-a-kind.
Focuses on UUID version 4, which is a type commonly used in various applications.

## How to test it:

1. Deploy the contract:

   Open your terminal or command prompt.

   ```bash
   node scripts/deploy.js
   ```

   This will deploy a contract on Warp Mainnet.

2. Copy the Contract ID:

   After successful deployment, you'll see a Contract ID displayed in the terminal. Copy this ID.
   Interact with the contract:

   Open the file named `scripts/interact.js` in a text editor.

   Paste the Contract ID you copied into the appropriate place within this file.

3. Run the following command in your terminal

   ```bash
   node scripts/interact.js
   ```

   This will initiate interaction with the contract, allowing you to generate UUIDs.

## Some Example UUIDs Generated

078107d3-e61b-4e33-95b2-7b37b8868c89

a5585135-bf72-4745-872e-1d60c6daab61

dff2902d-4991-4888-b294-d74d33e3c59e

bc68018c-52e4-4526-8a1b-7b4689a19bb0

44f9f8e6-384f-46ac-87ad-d0d54ab21cb1
