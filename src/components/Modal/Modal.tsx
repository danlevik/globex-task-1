import { modalContentType } from "@/shared/types";
import styles from "./styles.module.css";

export const Modal = ({
  setIsModalOpen,
  modalContent,
}: {
  setIsModalOpen: CallableFunction;
  modalContent: modalContentType;
}) => {
  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className={styles.modalBackground}
      ></div>

      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <p className={styles.name}>{modalContent.name}</p>
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className={styles.detailedContainer}>
          <p className={styles.categoryName}>Телефон: </p>
          <a className={styles.categoryInfo} href={"tel:" + modalContent.phone}>
            {modalContent.phone}
          </a>

          <p className={styles.categoryName}>Почта: </p>
          <a
            className={styles.categoryInfo}
            href={"mailto:" + modalContent.email}
          >
            {modalContent.email}
          </a>

          <p className={styles.categoryName}>Дата приема: </p>
          <p className={styles.categoryInfo}>{modalContent.hire_date}</p>

          <p className={styles.categoryName}>Должность: </p>
          <p className={styles.categoryInfo}>{modalContent.position_name}</p>

          <p className={styles.categoryName}>Подразделение: </p>
          <p className={styles.categoryInfo}>{modalContent.department}</p>
        </div>
        <div className={styles.additionalContainer}>
          <p className={styles.additionalName}>Дополнительная информация: </p>
          <p className={styles.additionalInfo}>
            Разработчики используют текст в качестве заполнителя макта страницы.
            Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </>
  );
};
