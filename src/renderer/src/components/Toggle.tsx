import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { NotificationError, NotificationSucces } from "../../utils/toast.uitlity";

interface ToggleProps {
  state: number;
  id: number;
  mutationToggle: UseMutationResult<AxiosResponse<any, any>, Error, number, unknown>
}

const Toggle = ({ state, id, mutationToggle }: ToggleProps) => {

  const isChecked = state === 1;
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxChange = async () => {
    const prevChecked = checked;
    setChecked(!checked);
    mutationToggle.mutate(id
      , {
        onSuccess: (data) => {
          if (data.status === 202) {
            NotificationSucces("Estado actualizado");
          }
        },
        onError: () => {
          NotificationError("Error al actualizar el estado");
          setTimeout(() => {
            setChecked(prevChecked);
          }, 1000);
        }
      })
  };

  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          checked={checked}
          disabled={mutationToggle.isPending}
          onChange={handleCheckboxChange}
          type="checkbox"
          className="sr-only peer"
        />
        <div
          className={`relative w-8 h-4 bg-colorSecundary/50 peer-focus:outline-none peer-focus:ring-2 dark:peer-focus:ring-0 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all  peer-checked:bg-colorSecundary
          ${mutationToggle.isPending ? "peer-checked:bg-colorSecundary/45 cursor-not-allowed" : null} `}
        ></div>
      </label>
    </>
  );
};
export default Toggle;
