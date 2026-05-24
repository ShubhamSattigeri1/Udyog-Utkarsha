import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Eye, EyeOff } from 'lucide-react';
import useContentStore from '../store/contentStore';
import { useLanguage } from '../contexts/LanguageContext';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [activeTab, setActiveTab] = useState('news');
    const [showPassword, setShowPassword] = useState(false);

    const {
        newsItems = [],
        addNewsItem = () => {},
        deleteNewsItem = () => {},
        addHomesliderImage = () => {},
        removeHomeSliderImage = () => {},
        addCollegeSliderImage = () => {},
        removeCollegeSliderImage = () => {},
        homeContent = { upcomingProgramsSlider: [] },
        collegeContent = { finishedProgramsSlider: [] },
        collegeTrainingRequests = [],
        studentEnrollments = [],
        deleteCollegeRequest = () => {},
        deleteStudentEnrollment = () => {},
    } = useContentStore((state) => ({
        newsItems: state.newsItems,
        addNewsItem: state.addNewsItem,
        deleteNewsItem: state.deleteNewsItem,
        addHomesliderImage: state.addHomesliderImage,
        removeHomeSliderImage: state.removeHomeSliderImage,
        addCollegeSliderImage: state.addCollegeSliderImage,
        removeCollegeSliderImage: state.removeCollegeSliderImage,
        homeContent: state.homeContent,
        collegeContent: state.collegeContent,
        collegeTrainingRequests: state.collegeTrainingRequests,
        studentEnrollments: state.studentEnrollments,
        deleteCollegeRequest: state.deleteCollegeRequest,
        deleteStudentEnrollment: state.deleteStudentEnrollment,
    }));

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginPassword === 'admin123') {
            setIsAuthenticated(true);
            setLoginPassword('');
            setLoginError('');
        } else {
            setLoginError('Invalid password. Use: admin123');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    const [newNewsContent, setNewNewsContent] = useState('');

    const handleAddNews = () => {
        if (newNewsContent.trim()) {
            addNewsItem(newNewsContent);
            setNewNewsContent('');
        }
    };

    const handleImageUpload = (e, onUpload) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onload = (ev) => onUpload(ev.target.result);
                reader.readAsDataURL(file);
            });
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="Enter admin password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute right-2 top-2 text-gray-600"
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                        </div>
                        {loginError && <div className="text-red-600">{loginError}</div>}
                        <button type="submit" className="w-full btn-primary">Login</button>
                        <p className="text-xs text-center text-gray-500">Demo password: admin123</p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-blue-900 text-white p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Admin Control Panel</h1>
                <button onClick={handleLogout} className="bg-red-600 px-3 py-2 rounded">Logout</button>
            </div>

            <div className="container mx-auto p-6">
                <div className="flex gap-2 mb-6">
                    {[
                        { id: 'news', label: language === 'en' ? 'Latest News' : 'समाचार' },
                        { id: 'home-slider', label: language === 'en' ? 'Home Slider' : 'मुख्य स्लाइडर' },
                        { id: 'college-slider', label: language === 'en' ? 'College Slider' : 'कॉलेज स्लाइडर' },
                        { id: 'college-requests', label: language === 'en' ? 'College Requests' : 'कॉलेज विनंत्या' },
                        { id: 'student-enrollments', label: language === 'en' ? 'Student Enrollments' : 'विद्यार्थी नोंदी' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-white p-6 rounded shadow">
                    {activeTab === 'news' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Manage News</h2>
                            <textarea value={newNewsContent} onChange={(e) => setNewNewsContent(e.target.value)} className="w-full border rounded p-2 mb-2" rows={3} />
                            <div className="flex gap-2">
                                <button onClick={handleAddNews} className="btn-primary">Add</button>
                            </div>
                            <div className="mt-4 space-y-3">
                                {newsItems.map((n) => (
                                    <div key={n.id} className="flex justify-between items-center border p-3 rounded">
                                        <div>
                                            <div className="text-sm text-gray-700">{n.content}</div>
                                            <div className="text-xs text-gray-500">{new Date(n.date).toLocaleString()}</div>
                                        </div>
                                        <button onClick={() => deleteNewsItem(n.id)} className="text-red-600"><Trash2 /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'home-slider' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Home Slider Images</h2>
                            <input type="file" multiple accept="image/*" onChange={(e) => handleImageUpload(e, addHomesliderImage)} />
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {(homeContent.upcomingProgramsSlider || []).map((img) => (
                                    <div key={img.id} className="relative">
                                        <img src={img.url} alt="slide" className="w-full h-24 object-cover rounded" />
                                        <button onClick={() => removeHomeSliderImage(img.id)} className="absolute top-1 right-1 bg-red-600 text-white rounded px-2">Del</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'college-slider' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">College Slider Images</h2>
                            <input type="file" multiple accept="image/*" onChange={(e) => handleImageUpload(e, addCollegeSliderImage)} />
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {(collegeContent.finishedProgramsSlider || []).map((img) => (
                                    <div key={img.id} className="relative">
                                        <img src={img.url} alt="slide" className="w-full h-24 object-cover rounded" />
                                        <button onClick={() => removeCollegeSliderImage(img.id)} className="absolute top-1 right-1 bg-red-600 text-white rounded px-2">Del</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'college-requests' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">College Training Requests</h2>
                            <div className="space-y-3">
                                {(collegeTrainingRequests || []).map((r) => (
                                    <div key={r.id} className="border p-3 rounded">
                                        <div className="font-semibold">{r.collegeName}</div>
                                        <div className="text-sm text-gray-600">{r.contactPerson} • {r.contactNumber}</div>
                                        <div className="mt-2"><button onClick={() => deleteCollegeRequest(r.id)} className="text-red-600">Delete</button></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'student-enrollments' && (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Student Enrollments</h2>
                            <div className="space-y-3">
                                {(studentEnrollments || []).map((s) => (
                                    <div key={s.id} className="border p-3 rounded">
                                        <div className="font-semibold">{s.fullName}</div>
                                        <div className="text-sm text-gray-600">{s.collegeName} • {s.contactNumber}</div>
                                        <div className="mt-2"><button onClick={() => deleteStudentEnrollment(s.id)} className="text-red-600">Delete</button></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
