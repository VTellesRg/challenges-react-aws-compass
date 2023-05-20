import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { UserType } from "../types/type";


type Props = {
    arrow: boolean;
    users: UserType[] | null;
    setArrow: (value: boolean) => void;
}

export function Friends({ arrow, users, setArrow }: Props) {
  return (
  <div className="topics">
      <div className={arrow ? "trend" : "trend-colapsed"}>
          <div className="trend-header">
              <h1 className="trend-header-title">Meus Amigos</h1>
              {arrow ?
                  <ChevronDownIcon className="trend-arrow" onClick={() => setArrow(false)} /> :
                  <ChevronUpIcon className="trend-arrow" onClick={() => setArrow(true)} />}
          </div>
          {arrow &&
              <div className="friends-list">
                  {users && users.map((user: UserType, key) => {
                      return (
                          <div className="friend" key={key}>
                              <img className="friend-image" src={user.profile_photo} />
                              <h1 className="friend-name">{user.name}</h1>
                          </div>
                      )
                  })}
              </div>
          }
      </div>
      <div className="trend" />
      <div className="trend" />

  </div>
)}