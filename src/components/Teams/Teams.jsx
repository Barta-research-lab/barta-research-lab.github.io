import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        fetch("/data/teams.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch teams");
                return res.json();
            })
            .then((data) => {
                setTeams(data);
                // Filter to show only Co-Directors by default
                setFilteredTeams(data);
            })
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    // Helper function to get roles from member (supports both role and roles)
    const getMemberRoles = (member) => {
        if (member.roles && Array.isArray(member.roles)) {
            return member.roles;
        }
        return member.role ? [member.role] : [];
    };

    // Helper function to get primary role for filtering/grouping
    const getPrimaryRole = (member) => {
        const roles = getMemberRoles(member);
        // Return the first role, or empty string if no roles
        return roles.length > 0 ? roles[0] : '';
    };

    const filterRoles = () => {
        const allRoles = new Set();
        teams.forEach(member => {
            const roles = getMemberRoles(member);
            roles.forEach(role => {
                // Combine Lead Researcher and Undergrad Researcher under "Researchers"
                if (role === 'Lead Researcher' || role === 'Undergrad Researcher') {
                    allRoles.add('Researchers');
                } else {
                    allRoles.add(role);
                }
            });
        });
        return ['All', ...Array.from(allRoles)];
    };

    const handleFilterChange = (role) => {
        setActiveFilter(role);
        if (role === 'All') {
            setFilteredTeams(teams);
        } else {
            setFilteredTeams(teams.filter(member => {
                const memberRoles = getMemberRoles(member);
                return memberRoles.some(mr => {
                    // Handle Researchers grouping
                    if (role === 'Researchers') {
                        return mr === 'Lead Researcher' || mr === 'Undergrad Researcher';
                    }
                    return mr === role;
                });
            }));
        }
    };

    // Group teams by role, combining researchers
    const groupTeamsByRole = (teamList) => {
        const grouped = {};
        teamList.forEach(member => {
            const primaryRole = getPrimaryRole(member);
            // Combine Lead Researcher and Undergrad Researcher under "Researchers"
            let displayRole = primaryRole;
            if (primaryRole === 'Lead Researcher' || primaryRole === 'Undergrad Researcher') {
                displayRole = 'Researchers';
            }
            
            if (!grouped[displayRole]) {
                grouped[displayRole] = [];
            }
            grouped[displayRole].push(member);
        });
        return grouped;
    };

    // Define the order of sections
    const sectionOrder = ['Co-Director', 'Mentor', 'Research Fellow', 'Researchers', 'Alumni'];

    const getRoleHeader = (section) => {
        const roleHeaders = {
            'Co-Director': 'Co-Directors',
            'Mentor': 'Mentors',
            'Research Fellow': 'Research Fellows',
            'Researchers': 'Researchers',
            'Alumni': 'Alumni'
        };
        return roleHeaders[section] || section;
    };

    const groupedTeams = groupTeamsByRole(filteredTeams);
    const orderedSections = sectionOrder.filter(section => groupedTeams[section]);

    return (
        <section className="bg-cream-primary">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-8 md:mb-16">
                    Meet Our Team
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {teams.length > 0 && filterRoles().map((role, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(role)}
                            className={`px-4 py-2 rounded-full text-md font-medium transition-all duration-300 ${activeFilter === role
                                ? 'bg-green-primary text-white shadow-md'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            {role === 'All' || role === 'Research Fellow' || role === 'Lead Researcher' ? role : role + 's'}
                        </button>
                    ))}
                </div>

                {/* Team Cards with Headers */}
                <div className="space-y-12">
                    {orderedSections.map((section) => (
                        <div key={section}>
                            <h3 className="text-2xl font-bold font-nunito text-gray-700 mb-6">
                                {getRoleHeader(section)}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {groupedTeams[section].map((member, index) => (
                                    <TeamCard key={index} member={member} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teams;