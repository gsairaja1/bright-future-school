import React, { useState } from 'react';
import './Announcements.css';

const Announcements = () => {
  const [expandedNotices, setExpandedNotices] = useState(new Set([0, 1])); // First 2 notices expanded by default
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

  // Dummy announcements data
  const announcements = [
    {
      id: 1,
      title: "Parent-Teacher Conference Schedule",
      date: "2024-01-15",
      message: "Parent-teacher conferences will be held on January 20th and 21st. Please schedule your appointment through the school portal. All meetings will be conducted in the main hall.",
      priority: "high"
    },
    {
      id: 2,
      title: "Annual Sports Day Registration",
      date: "2024-01-12",
      message: "Annual Sports Day is scheduled for February 15th. Students can register for various events including track and field, swimming, and team sports. Registration closes on January 30th.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Library Week Celebration",
      date: "2024-01-10",
      message: "Join us for Library Week from January 25th to 30th. Special activities include book fairs, author visits, and reading competitions. All students are encouraged to participate.",
      priority: "low"
    },
    {
      id: 4,
      title: "Science Fair Project Submissions",
      date: "2024-01-08",
      message: "Science Fair project submissions are due by January 31st. Projects should be innovative and demonstrate scientific principles. Winners will be announced on February 10th.",
      priority: "high"
    },
    {
      id: 5,
      title: "School Bus Route Updates",
      date: "2024-01-05",
      message: "Updated bus routes for the new semester are now available. Please check the school website for route changes and updated pickup times. Contact transportation office for any queries.",
      priority: "medium"
    },
    {
      id: 6,
      title: "Art Competition Winners",
      date: "2024-01-03",
      message: "Congratulations to all participants in the annual art competition. Winners will be displayed in the school gallery for the next month. Special recognition to our first place winner.",
      priority: "low"
    },
    {
      id: 7,
      title: "Exam Schedule Updates",
      date: "2024-01-01",
      message: "Mid-term examinations will begin on February 5th. Detailed schedule and room assignments will be posted on the notice board and school website. Students should check their schedules.",
      priority: "high"
    },
    {
      id: 8,
      title: "Environmental Club Meeting",
      date: "2023-12-28",
      message: "Environmental Club will meet every Tuesday after school in Room 205. New members are welcome. We'll be working on the school garden project and recycling initiatives.",
      priority: "low"
    }
  ];

  const toggleNotice = (id) => {
    const newExpanded = new Set(expandedNotices);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNotices(newExpanded);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'Important';
      case 'medium': return 'Notice';
      case 'low': return 'Info';
      default: return 'General';
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(announcements.length / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const endIndex = startIndex + noticesPerPage;
  const currentNotices = announcements.slice(startIndex, endIndex);

  return (
    <div className="announcements-container">
      <div className="announcements-header">
        <h2>Announcements & Notices</h2>
        <p>Stay updated with the latest school news and important information</p>
      </div>

      <div className="announcements-grid">
        {currentNotices.map((notice) => (
          <div 
            key={notice.id} 
            className={`announcement-card ${expandedNotices.has(notice.id) ? 'expanded' : ''}`}
          >
            <div 
              className="announcement-header"
              onClick={() => toggleNotice(notice.id)}
            >
              <div className="announcement-title-section">
                <h3>{notice.title}</h3>
                <span 
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(notice.priority) }}
                >
                  {getPriorityLabel(notice.priority)}
                </span>
              </div>
              <div className="announcement-meta">
                <span className="announcement-date">{formatDate(notice.date)}</span>
                <button className="expand-button">
                  {expandedNotices.has(notice.id) ? '−' : '+'}
                </button>
              </div>
            </div>
            
            {expandedNotices.has(notice.id) && (
              <div className="announcement-content">
                <p>{notice.message}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Announcements; 