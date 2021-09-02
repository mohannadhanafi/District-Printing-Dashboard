import React, { useState } from 'react';
import HorzintalLine from '../../HorzintalLine/HorzintalLine';
import UserCard from './UserCard';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import "../style.scss";

export default function ChatUsers() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = ({ target: { value } }) => setSearchValue(value);
    return (
        <div className="chat--users">
          <div className="search--bar__chat d-flex justify-content-between align-items-center" style={{ background: "#F4F4F4", borderRadius: 4 }}>
          <input
                    type="text"
                    autoFocus={true}
                    placeholder="Search here..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="form-control form-control-sendmessage"
                    style={{ background: "#F4F4F4", border: "1px solid #F4F4F4" }}
                />
                <div className="sendmessage--buttons d-flex justify-content-between align-items-center">
                <span className="svg-icon svg-icon-lg">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/Search.svg"
                          )}
                        />
                      </span>
                </div>
          </div>
        <HorzintalLine borderColor="#ECEAF3" />
        <div className="chat--users__lastmessages">
        <h5 className="title--messages">Pinned Messages</h5>
        <UserCard />
        <UserCard />
        <UserCard />
        <HorzintalLine borderColor="#ECEAF3" />
        <h5 className="title--messages">Recent Messages</h5>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        </div>
        </div>
    )
}
