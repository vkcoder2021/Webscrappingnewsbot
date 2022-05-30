import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { expressNewsContent } from '../utils/expressApi';

export default function WikiContent() {
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(searchParams.get('ref'));
    expressNewsContent(searchParams.get('ref')).then((content) =>
      setContent(content),
    );
  }, [searchParams]);
  return (
    <div className="WikiContent Dashboard">
      <div className="title">{searchParams.get('title')}</div>
      <div className="content">
        {content.map((para) => (
          <p>{para}</p>
        ))}
      </div>
      
    </div>
  );
}
