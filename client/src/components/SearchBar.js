import { useState, useRef } from 'react';
import { Alert, Container, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NAVIGATION from '../config/navigation';

const SearchBar = ({ target }) => {
    const [searchText, setSearchText] = useState('');
    const type = target.toString().toLowerCase();
    const results = type === 'admin' ? NAVIGATION.SEARCHBAR.ADMIN : (type === 'hospital' ? NAVIGATION.SEARCHBAR.HOSPITAL : {});
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const filteredCategories = Object.entries(results)
        .filter(([category, entries]) => {
            return entries.some((entry) => entry.title.toLowerCase().includes(searchText.toLowerCase()) || entry.subtitle.toLowerCase().includes(searchText.toLowerCase()));
        }).sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB));

    return (
        <Container className="alert p-0 mb-0">
            <InputGroup className="search-box border-bottom border-2 border-danger mb-2">
                <InputGroup.Text className="fs-4 bi bi-search text-danger bg-transparent border-0" />
                <Form.Control type="search" size="lg" className="search-input no-focus-border bg-transparent border-0" placeholder="Search" value={searchText} onChange={handleSearch} />
            </InputGroup>
            <Alert variant="light" className={`w-100 position-absolute start-0 search-result fs-6 py-2 rounded-0 shadow p-3 mb-0 ${searchText ? 'd-block' : 'd-none'}`}>
                {filteredCategories.length > 0 ? (
                    filteredCategories.map(([category, entries]) => (
                        <div key={category}>
                            <Dropdown.Header>{category}</Dropdown.Header>
                            {
                                entries.filter((entry) => entry.title.toLowerCase().includes(searchText.toLowerCase()) || entry.subtitle.toLowerCase().includes(searchText.toLowerCase()))
                                    .sort((entryA, entryB) => entryA.title.localeCompare(entryB.title))
                                    .map((entry, index) => (
                                        <Link key={index} className="alert alert-light btn btn-danger w-100 text-start my-1 py-2 px-1 px-md-2 border-0" to={entry.href}>
                                            <strong className="fs-5" dangerouslySetInnerHTML={{ __html: truncateText(entry.title, windowSize.current[0] / 5) }} />
                                            <div className="fs-6" dangerouslySetInnerHTML={{ __html: truncateText(entry.subtitle, windowSize.current[0] / 5) }} />
                                        </Link>
                                    ))}
                        </div>
                    ))
                ) : (
                    <Alert variant="light border-0 mb-0">No results found.</Alert>
                )}
            </Alert>
        </Container>
    );
};

export default SearchBar;
