import React, { useState } from 'react';
import RifasListPage from './rifas/RifasListPage';
import CreateRifaWizard from './rifas/CreateRifaWizard';

type RifasView = 'list' | 'create';

const RifasPage: React.FC = () => {
    const [view, setView] = useState<RifasView>('list');
    
    const handleNavigateToList = () => {
        setView('list');
    };
    
    const handleNavigateToCreate = () => {
        setView('create');
    };

    return (
        <div>
            {view === 'list' && <RifasListPage onNavigateToCreate={handleNavigateToCreate} />}
            {view === 'create' && <CreateRifaWizard onNavigateToList={handleNavigateToList} />}
        </div>
    );
};

export default RifasPage;
