import React, { FC } from "react";
import IndexLayout from "../../layouts/IndexLayout/IndexLayout";
import styles from "./TermsPage.module.css";

interface TermsPageProps {}

const TermsPage: FC<TermsPageProps> = () => (
  <div className={styles.TermsPage}>
    <IndexLayout>
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-2">
          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-12">
                <h1>Terms &amp; Conditions</h1>

                <div>
                 
                  <h3>1. Terms</h3>
                  <p className="text-md font-light mt-2">
                    By accessing our app, Dhammapada, you are agreeing to be
                    bound by these terms of service, all applicable laws and
                    regulations, and agree that you are responsible for
                    compliance with any applicable local laws. If you do not
                    agree with any of these terms, you are prohibited from using
                    or accessing Dhammapada. The materials contained in
                    Dhammapada are protected by applicable copyright and
                    trademark law.
                  </p>
                  <h3>2. Use License</h3>
                  <ol type="a">
                    <li>
                      Permission is granted to temporarily download one copy of
                      Dhammapada per device for personal, non-commercial
                      transitory viewing only. This is the grant of a license,
                      not a transfer of title, and under this license you may
                      not:
                      <ol type="i">
                        <li>modify or copy the materials;</li>
                        <li>
                          use the materials for any commercial purpose, or for
                          any public display (commercial or non-commercial);
                        </li>
                        <li>
                          attempt to decompile or reverse engineer any software
                          contained in Dhammapada;
                        </li>
                        <li>
                          remove any copyright or other proprietary notations
                          from the materials; or
                        </li>
                        <li>
                          transfer the materials to another person or "mirror"
                          the materials on any other server.
                        </li>
                      </ol>
                    </li>
                    <li>
                      This license shall automatically terminate if you violate
                      any of these restrictions and may be terminated by Xiao
                      Yuan Lv at any time. Upon terminating your viewing of
                      these materials or upon the termination of this license,
                      you must destroy any downloaded materials in your
                      possession whether in electronic or printed format.
                    </li>
                  </ol>
                  <h3>3. Disclaimer</h3>
                  <ol type="a">
                    <li>
                      The materials within Dhammapada are provided on an 'as is'
                      basis. Xiao Yuan Lv makes no warranties, expressed or
                      implied, and hereby disclaims and negates all other
                      warranties including, without limitation, implied
                      warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual
                      property or other violation of rights.
                    </li>
                    <li>
                      Further, Xiao Yuan Lv does not warrant or make any
                      representations concerning the accuracy, likely results,
                      or reliability of the use of the materials on its website
                      or otherwise relating to such materials or on any sites
                      linked to Dhammapada.
                    </li>
                  </ol>
                  <h3>4. Limitations</h3>
                  <p className="text-md font-light mt-2">
                    In no event shall Xiao Yuan Lv or its suppliers be liable
                    for any damages (including, without limitation, damages for
                    loss of data or profit, or due to business interruption)
                    arising out of the use or inability to use Dhammapada, even
                    if Xiao Yuan Lv or a Xiao Yuan Lv authorized representative
                    has been notified orally or in writing of the possibility of
                    such damage. Because some jurisdictions do not allow
                    limitations on implied warranties, or limitations of
                    liability for consequential or incidental damages, these
                    limitations may not apply to you.
                  </p>
                  <h3>5. Accuracy of materials</h3>
                  <p className="text-md font-light mt-2">
                    The materials appearing in Dhammapada could include
                    technical, typographical, or photographic errors. Xiao Yuan
                    Lv does not warrant that any of the materials on Dhammapada
                    are accurate, complete or current. Xiao Yuan Lv may make
                    changes to the materials contained in Dhammapada at any time
                    without notice. However Xiao Yuan Lv does not make any
                    commitment to update the materials.
                  </p>
                  <h3>6. Links</h3>
                  <p className="text-md font-light mt-2">
                    Xiao Yuan Lv has not reviewed all of the sites linked to its
                    app and is not responsible for the contents of any such
                    linked site. The inclusion of any link does not imply
                    endorsement by Xiao Yuan Lv of the site. Use of any such
                    linked website is at the user's own risk.
                  </p>
                  <h3>7. Modifications</h3>
                  <p className="text-md font-light mt-2">
                    Xiao Yuan Lv may revise these terms of service for its app
                    at any time without notice. By using Dhammapada you are
                    agreeing to be bound by the then current version of these
                    terms of service.
                  </p>
                  <h3>8. Governing Law</h3>
                  <p className="text-md font-light mt-2">
                    These terms and conditions are governed by and construed in
                    accordance with the laws of Yangon and you irrevocably
                    submit to the exclusive jurisdiction of the courts in that
                    State or location.
                  </p>
                  <a
                    href="https://getterms.io"
                    title="Generate a free terms of use document"
                  >
                    Terms of Use created with GetTerms.
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

export default TermsPage;
