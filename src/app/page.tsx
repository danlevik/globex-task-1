"use client";

import styles from "./page.module.css";
import { UserCard } from "@/components/UserCard/UserCard";
import { GridLayout } from "@/components/GridLayout/GridLayout";
import { Search } from "@/components/Search/Search";
import { Modal } from "@/components/Modal/Modal";

import { useGetUserQuery } from "@/redux/services/userApi";

import { useState, useEffect } from "react";
import { UserCardProps, modalContentType } from "@/shared/types";

export default function Home() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const { data, error, isLoading } = useGetUserQuery(debouncedQuery);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({} as modalContentType);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} modalContent={modalContent} />
      )}
      <main className={styles.container}>
        <Search query={query} setQuery={setQuery} />
        {error && <p className={styles.error}>Сервер не отвечает</p>}
        <GridLayout>
          {(isLoading ? [] : error ? [] : data).map((obj: UserCardProps) => (
            <UserCard
              key={obj.name}
              name={obj.name}
              phone={obj.phone}
              email={obj.email}
              address={obj.address}
              department={obj.department}
              hire_date={obj.hire_date}
              position_name={obj.position_name}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
            />
          ))}
        </GridLayout>
      </main>
    </>
  );
}
