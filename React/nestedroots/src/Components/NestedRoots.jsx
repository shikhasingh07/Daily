import React, { useState } from "react";

const NestedRoots = () => {
  const [folder, setFolder] = useState({
    public: {
      src: {
        "File.js": {},
        "App.js": {},
      },
      assets: {
        "logo.png": {},
      },
    },
    components: {
      "Header.js": {
        "Yo" :{}
      },
      "Footer.js": {},
    },
  });

  const [expandedFolders, setExpandedFolders] = useState({});

  const handleExpand = (path) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderTree = (node, parentPath = "") => {
    return Object.entries(node).map(([key, value]) => {
      const currentPath = parentPath ? `${parentPath}/${key}` : key;
      const isExpandable =
        typeof value === "object" && Object.keys(value).length > 0;
      const isExpanded = expandedFolders[currentPath];

      return (
        <React.Fragment key={currentPath}>
          <tr>
            <td>
              {isExpandable && (
                <button onClick={() => handleExpand(currentPath)}>
                  {isExpanded ? "-" : "+"}
                </button>
              )}
              {key}
            </td>
          </tr>
          {isExpanded && isExpandable && renderTree(value, currentPath)}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <h3>Folder Structure (1 Level Expand)</h3>
      <table border="1">
        <tbody>{renderTree(folder)}</tbody>
      </table>
    </div>
  );
};

export default NestedRoots;
