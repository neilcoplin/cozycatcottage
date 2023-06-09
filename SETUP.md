# Account setup
If the site has to be re-set up again, the following resources must be created in the AWS Console in order to get it functional again.

For all setup actions, please make sure you are in the `us-east-2 (Ohio)` region in AWS, as that will give us the most local hosting for faster response times from AWS.  Some things like IAM are global, however SES and Amplify are region specific.

**Note: This is not for setting up your local environment to contribute to the established site, but for setting up the site on the host AWS environment.**

## 1. IAM Service Account

The site requires a service account in order to send emails for the memorial tribute/honoring form.  This account should be locked down to ONLY the permissions it needs to do its job.

1. Go to the IAM section of the AWS Console.
1. Click `Add User`.
1. Enter `CozyCatCottageWebsite` as the username.  Do **not** click the console access checkbox.
1. Select the option to `Attach policies directly` to use pre-established AWS policies.
1. Find the `AmazonSESFullAccess` policy and attach it.
1. Complete creating the user.

## 2. Create the Amplify Site

Prior to completing this step, you'll need to make sure you have access to the GitHub project at `neilcoplin/cozycatcottage`.

1. Go to the AWS Amplify console.
1. Get started with `Amplify Hosting`.
1. Choose `GitHub` as a source, and sign in to GitHub.
1. Choose the `neilcoplin/cozycatcottage` repository and `main` branch.
1. Keep the default `cozycatcottage` app name and service account.  The build setting should be imported automatically from `/amplify.yml`, though should include an additional line for importing Amplify environment variables in the build process.  If not, add this line from `/amplify.yml`.
1. Confirm the settings and deploy the site.

Completing this will set a webhook in the project that deploys code over to the specified AWS resources on push events in GitHub.

## 3. Set up dev site

Set up a development site that is deployed off of the development branch.  This will then allow for stakeholders to preview changes prior to them going live.

1. Go to the Amplify console and into the `cozycatcottage` site.
1. Click on the `Connect branch` button.
1. Select the `development` branch from the dropdown list.
1. Save and deploy the branch.

## 4. Put the IAM user in the Amplify environment

We'll need to generate security credentials for the script that sends the email first, then place them in the Amplify environment.  Note that while it would be more secure to place these in AWS Secret Manager, that has additional cost on it in trade for the extra security that likely isn't needed for this simple of a script.  Since the SES mailer will only have authroziation to send from one email address, it won't be too easy to abuse if this ever got hacked.

1. Go to the IAM section of the AWS console.
1. Pull up the `CozyCatCottageWebsite` user created in the first step.
1. Click over to the `security credentials` tab.
1. Use the `Create access key` button to generate new credentials.
1. Select either `Application running outside of AWS` or `Other` to proceed.
1. Name the access key `Amplify SES Mailer`.
1. Copy down the access key and secret key or download the .csv file.
1. Navigate to the AWS Amplify console and open the `cozycatcottage` site.
1. Click on `Environment variables`.
1. Add the following two variables to all branches.
    - SES_ACCESS_KEY
    - SES_SECRET_ACCESS_KEY

It's also probably useful at this time to set up the `BRANCH` variable equal to `feature` with an override on it for both the `main` branch to set this to `main` and `development` branch set to `development`.

You'll probably also want to place these in your local .env file at this time too for local development setup if that isn't already done.

## 5. Authorize the SES identity

You'll need someone that has access to the `cozycatcottageadoption@gmail.com` and `cccthanksyou@yahoo.com` addresses in order to confirm setup.  This step is so the site will be able to send emails from that particular address.  If new forms are built that requrie other email from addresses, this can done for them as well.

1. Go to the SES console.
1. Click `Create identity`.
1. Select an email address and enter `cozycatcottageadoption@gmail.com`.
1. Repeat steps for `cccthanksyou@yahoo.com`.
    - If you wish to set up your email as a temporary tester email for forms, repeat the steps again with your own email at this time.
1. Have someone who has access to that email address forward you the confirmation email.
1. Click the link in the email to confirm it.

## 6. Set up the domain(s)

Transferring the domain will depend on where it is currently registered.  Follow instructions in the AWS Amplifiy console to set up the domain appropriately.  Note that you will need to perform this for each domain that Cozy Cat Cottage owns.  You may wish to do it for a less important domain first and leave the primary one to last.

- cozycatcottage.org (primary)
- cozycatcottage.com
- cozycatcottage.net
- cozycatcottage.info

Current instructions for setting up a GoDaddy hosted domain are at https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-godaddy.html.

1. Go to the AWS Amplify console.
1. Click on `Domain management`.
1. Click `Add domain`.
1. Enter the domain to set up (i.e. `cozycatcottage.org`) and click `Configure Domain`.
1. Add another subdomain for `development` that points to the `development` site.  All other subdomains will point to the `main` site.  Ensure the setup redirect to use the `www` version of the site checkbox is checked.
1. Save the domain to create the SSL certificates for that domain.
1. Click on the actions -> View DNS records for that domain to see what DNS entries should be created.
1. Go to the GoDaddy domain registration and add DNS records for CNAME to verify ownership of the site as well as establish subdomain routing to the hosting site.  These are currently listed as steps 1 and 3.  Step 2 may be skipped as GoDaddy does not support it.
1. Wait for DNS records to update and site ownership to be verified.  Note that while domain ownership can be verified independently, domain activation cannot complete until all subdomains have a corresponding CNAME record.