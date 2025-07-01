"use client";

import { logout } from "../login/actions";

export default function Dashboard() {
    return (
        <div>
            dashboard
            <button className="block bg-green-900" onClick={() => logout()}>
                logout
            </button>
        </div>
    );
}
