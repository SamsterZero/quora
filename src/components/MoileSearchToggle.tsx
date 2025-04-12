'use client';
import { useState } from 'react';

const MobileSearchToggle = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <button type="button" className="material-symbols-outlined text-danger md:hidden">
            search
        </button>
    );
};

export default MobileSearchToggle;
