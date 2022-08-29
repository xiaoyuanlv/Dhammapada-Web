import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DhammaLayout from "../../layouts/DhammaLayout/DhammaLayout";
import categoryService from "../../services/category.service";
import dhammaService from "../../services/dhamma.service";
import { Category, CategoryResponse } from "../../types/category.model";
import { Dhamma, DhammaListResponse } from "../../types/dhamma.model";
import styles from "./DhammaListPage.module.css";
import lotus from "../../assets/img/lotus.svg";
import lake from "../../assets/img/lake.png";

interface DhammaListPageProps {}

const DhammaListPage: FC<DhammaListPageProps> = () => {
  let params = useParams();

  let [loading, setLoading] = useState(false);
  let [dhammaList, setDhammaList] = useState<Dhamma[]>([]);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let [selectedOne, setSelectedOne] = useState<Dhamma | null>(null);
  let [category, setCategory] = useState<Category | null>(null);

  React.useEffect(() => {
    try {
      if (params.id != null) {
        getCategory(Number(params.id));
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  const nextPage = () => {
    var nextIndex = selectedIndex + 1;
    if (dhammaList.length > nextIndex) {
      setSelectedIndex(nextIndex);
      setSelectedOne(dhammaList[nextIndex]);
    }
  };

  const prevPage = () => {
    var prevIndex = selectedIndex - 1;
    if (prevIndex >= 0) {
      setSelectedIndex(prevIndex);
      setSelectedOne(dhammaList[prevIndex]);
    }
  };

  const getCategory = (id: number) => {
    setLoading(true);
    categoryService.getByID(id).then((res: CategoryResponse) => {
      if (res.data[0] != null) {
        setCategory(res.data[0]);
        getList(res.meta.id);
      }
    }, (error) => {
      var resMessage = (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
      if (
        error.response != undefined &&
        error.response.data != null &&
        error.response.data.error != null
      ) {
        if (
          error.response.data.error != null &&
          error.response.data.error.code == 404
        ) {
          resMessage = "Not Found";
        } else if (error.response.data.error.message != null) {
          resMessage = error.response.data.error.message;
        }
      }
      setLoading(false);
    });
  };

  const getList = (categoryId: number) => {
    setLoading(true);
    dhammaService.getByCategoryID(categoryId).then(
      (res: DhammaListResponse) => {
        setLoading(false);
        setSelectedIndex(0);
        setSelectedOne(res.data[0]);
        setDhammaList(res.data);
      },
      (error) => {
        var resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
        if (
          error.response != undefined &&
          error.response.data != null &&
          error.response.data.error != null
        ) {
          if (
            error.response.data.error != null &&
            error.response.data.error.code == 404
          ) {
            resMessage = "Not Found";
          } else if (error.response.data.error.message != null) {
            resMessage = error.response.data.error.message;
          }
        }
        setLoading(false);
        setDhammaList([]);
      },
    );
  };

  return (
    <div className={styles.DhammaListPage}>
      <DhammaLayout>
        <header className="bg-gradient-dark">
          <div className="page-header min-vh-75 bg-primary">
            <span className="mask bg-gradient-primary opacity-6"></span>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center mx-auto my-auto">
                  <img src={lotus} width={77} height="auto" />
                  <h1 className="text-white mb-2">{category?.id}</h1>
                  <h3 className="text-white mb-5">
                    {category?.title} ( {category?.mm_title} )
                  </h3>
                  <p className="lead mb-4 text-white opacity-8">
                    {category?.pali_title} {category?.pali_roman}
                  </p>
                  <h6 className="text-white mb-2 mt-5">Back to Home</h6>
                  <div className="d-flex justify-content-center">
                    <Link to={"/"}>
                      <i className="fa-solid fa-book text-lg text-white"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
          <section className="py-2">
            <div className="container">
              <div className="row  align-items-center justify-content-center text-center">

              { (dhammaList == undefined ||
                  dhammaList.length <= 0 ) &&  loading &&
                  <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  }

                { (dhammaList == undefined ||
                  dhammaList.length <= 0 ) && !loading &&
                  <p>Data is not found... Please try again later</p>}

                <div className="col-12 text-center">
                  <h1>{selectedOne?.id}</h1>
                  {dhammaList.length > 0 &&
                    (
                      <p>
                        [ {dhammaList[0].id} -{"  "}
                        {dhammaList[dhammaList.length - 1].id} ]
                      </p>
                    )}
                  <a
                    onClick={() => prevPage()}
                    type="button"
                    className="btn bg-gradient-info btn-sm mb-0 mt-3"
                  >
                    <i className="fas fa-caret-left mr-2 "></i>
                  </a>

                  &nbsp;&nbsp;

                  <a
                    onClick={() => nextPage()}
                    type="button"
                    className="btn bg-gradient-info btn-sm mb-0 mt-3"
                  >
                    <i className="fas fa-caret-right mr-2"></i>
                  </a>
                </div>
              </div>

              {selectedOne != null &&
                (
                  <div key={selectedOne.id}>
                    <div className="row align-items-center mt-5">
                      <div className="col-lg-6 ms-auto mt-lg-0 mt-7 mb-7 px-2">
                        <div className="card" style={{ minHeight: 170 }}>
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <p
                              style={{
                                position: "absolute",
                                top: "2px",
                                left: "-5px",
                              }}
                            >
                              {category?.title}
                            </p>
                          </div>
                          <div className="card-body text-center py-5 px-5">
                            <p style={{ lineHeight: 2 }}>
                              {selectedOne.message}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 ms-auto mt-lg-0 mt-7 mb-7 px-2">
                        <div className="card" style={{ minHeight: 170 }}>
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <p
                              style={{
                                position: "absolute",
                                top: "2px",
                                left: "-5px",
                              }}
                            >
                              {category?.mm_title}.
                            </p>
                          </div>
                          <div className="card-body text-center py-5 px-5">
                            <p style={{ lineHeight: 2.3 }}>
                              {selectedOne.mm_message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mt-5">
                      <div className="col-lg-6 ms-auto mt-lg-0 mt-7 mb-7 px-2">
                        <div className="card" style={{ minHeight: 170 }}>
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <p
                              style={{
                                position: "absolute",
                                top: "2px",
                                left: "-5px",
                              }}
                            >
                              {category?.pali_title}.
                            </p>
                          </div>
                          <div className="card-body text-center py-5 px-5">
                            <p style={{ lineHeight: 2 }}>
                              {selectedOne.pali_message}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 ms-auto mt-lg-0 mt-7 mb-7 px-2">
                        <div className="card" style={{ minHeight: 170 }}>
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <p
                              style={{
                                position: "absolute",
                                top: "2px",
                                left: "-5px",
                              }}
                            >
                              {category?.pali_roman}.
                            </p>
                          </div>
                          <div className="card-body text-center py-5 px-5">
                            <p style={{ lineHeight: 2 }}>
                              {selectedOne.pali_roman}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              <div className="row">
                <div className="col-12 text-center">
                  <img src={lake} width="500" height="auto" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </DhammaLayout>
    </div>
  );
};

export default DhammaListPage;
