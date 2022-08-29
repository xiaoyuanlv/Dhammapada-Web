import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import IndexLayout from "../../layouts/IndexLayout/IndexLayout";
import categoryService from "../../services/category.service";
import { Category, CategoryListResponse } from "../../types/category.model";
import styles from "./MainPage.module.css";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  let [loading, setLoading] = useState(false);
  let [categoryList, setCategoryList] = useState<Category[]>([]);

  React.useEffect(() => {
    getMainList();
  }, []);

  const getMainList = () => {
    setLoading(true);
    categoryService.getList().then(
      (res: CategoryListResponse) => {
        setLoading(false);
        setCategoryList(res.data);
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
        setCategoryList([]);
      },
    );
  };

  return (
    <div className={styles.MainPage}>
      <IndexLayout>
        <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6" style={{ minHeight: 700 }}>
          <section className="py-7">
            <div className="container">
              <div className="row align-items-center justify-content-center text-center mt-5">

                { (categoryList == undefined ||
                  categoryList.length <= 0 ) &&  loading &&
                  <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  }

                { (categoryList == undefined ||
                  categoryList.length <= 0 ) && !loading &&
                  <p>Data is not found... Please try again later</p>}

                {categoryList != undefined &&
                  categoryList.length > 0 &&
                  categoryList.map((it) => (
                    <div
                      key={it.id}
                      className="col-lg-3 ms-auto mt-lg-0 mt-7 mb-7 px-2"
                    >
                      <div className="card">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <p
                            style={{
                              position: "absolute",
                              top: "2px",
                              left: "-5px",
                            }}
                          >
                            {it.id}. {it.title}
                          </p>
                        </div>
                        <div className="card-body text-center py-5">
                          <h6 className="font-weight-normal mt-2">
                            {it.mm_title} <br />
                            <br />
                            {it.pali_title}
                            <br />
                            <br />
                            {it.pali_roman}
                          </h6>
                          <Link
                            to={"dhamma/" + it.id}
                            type="button"
                            className="btn bg-gradient-info btn-sm mb-0 mt-3"
                          >
                            <i className="fas fa-book-open mr-2"></i> Read
                          </Link>
                        </div>

                        <img
                          src="./assets/img/lotusflower.svg"
                          alt="lotus-flower"
                          className="img-fluid border-radius-lg lotusFlower"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </IndexLayout>
    </div>
  );
};

export default MainPage;
