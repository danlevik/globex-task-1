export interface modalContentType {
  name: string;
  email: string;
  phone: string;
  hire_date: string;
  position_name: string;
  department: string;
}

export interface UserCardProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
  setIsModalOpen: CallableFunction;
  setModalContent: CallableFunction;
}
