import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("/data/teams.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch teams");
                return res.json();
            })
            .then((data) => {
                setTeams(data);
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

    // Helper function to get primary role for grouping
    const getPrimaryRole = (member) => {
        const roles = getMemberRoles(member);
        // Return the first role, or empty string if no roles
        return roles.length > 0 ? roles[0] : '';
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

    const groupedTeams = groupTeamsByRole(teams);
    const orderedSections = sectionOrder.filter(section => groupedTeams[section]);

    return (
        <section className="bg-cream-primary">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-8 md:mb-16">
                    Meet Our Team
                </h2>

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