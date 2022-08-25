import React, { FC } from "react";
import IndexLayout from "../../layouts/IndexLayout/IndexLayout";
import styles from "./PrivacyPolicyPage.module.css";

interface PrivacyPolicyPageProps {}

const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = () => (
  <div className={styles.PrivacyPolicyPage}>
    <IndexLayout>
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-2">
          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-12">
                <h1>Privacy Policy</h1>

                <div>
                  <p className="text-md font-light mt-2">
                    Your privacy is important to us. It is Xiao Yuan Lv's policy
                    to respect your privacy regarding any information we may
                    collect from you through our app, Dhammapada.
                  </p>
                  <p className="text-md font-light mt-2">
                    We only ask for personal information when we truly need it
                    to provide a service to you. We collect it by fair and
                    lawful means, with your knowledge and consent. We also let
                    you know why we’re collecting it and how it will be used.
                  </p>
                  <p className="text-md font-light mt-2">
                    We only retain collected information for as long as
                    necessary to provide you with your requested service. What
                    data we store, we’ll protect within commercially acceptable
                    means to prevent loss and theft, as well as unauthorized
                    access, disclosure, copying, use or modification.
                  </p>
                  <p className="text-md font-light mt-2">
                    We don’t share any personally identifying information
                    publicly or with third-parties, except when required to by
                    law.
                  </p>
                  <p className="text-md font-light mt-2">
                    Our app may link to external sites that are not operated by
                    us. Please be aware that we have no control over the content
                    and practices of these sites, and cannot accept
                    responsibility or liability for their respective privacy
                    policies.
                  </p>
                  <p className="text-md font-light mt-2">
                    You are free to refuse our request for your personal
                    information, with the understanding that we may be unable to
                    provide you with some of your desired services.
                  </p>
                  <p className="text-md font-light mt-2">
                    Your continued use of our app will be regarded as acceptance
                    of our practices around privacy and personal information. If
                    you have any questions about how we handle user data and
                    personal information, feel free to contact us.
                  </p>
                  <p className="text-md font-light mt-2">
                    This policy is effective as of 19 November 2020.
                  </p>
                  <a
                    href="https://getterms.io"
                    title="Generate a free privacy policy"
                  >
                    Privacy Policy created with GetTerms.
                  </a>
                </div>

                <p>...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </IndexLayout>
  </div>
);

export default PrivacyPolicyPage;
