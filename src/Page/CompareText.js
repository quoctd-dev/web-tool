import React, { useState } from "react";
import { html } from "diff2html"; // Import hàm html từ diff2html

function CompareText() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [showDiff, setShowDiff] = useState(false);

    const handleCompare = () => {
        setShowDiff(true);
    };

    const generateDiff = (text1, text2) => {
        // Tạo sự khác biệt giữa hai văn bản bằng cách chia thành từng dòng
        const lines1 = text1.split("\n");
        const lines2 = text2.split("\n");

        let diff = "--- a/file.txt\n+++ b/file.txt\n";
        diff += "@@ -1," + Math.max(lines1.length, lines2.length) + " +1," + Math.max(lines1.length, lines2.length) + " @@\n";

        // Tạo từng dòng diff
        const lineCount = Math.max(lines1.length, lines2.length);
        for (let i = 0; i < lineCount; i++) {
            const l1 = lines1[i] ?? ""; // Nếu không có dòng thì gán là ""
            const l2 = lines2[i] ?? "";
            if (l1 !== l2) {
                if (l1) diff += `-${l1}\n`;
                if (l2) diff += `+${l2}\n`;
            } else {
                diff += ` ${l1}\n`; // Nếu giống nhau, giữ nguyên
            }
        }

        // Chuyển đổi chuỗi diff thành HTML sử dụng diff2html
        return html(diff);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>So sánh 2 văn bản</h1>

            <div style={{ marginBottom: "20px" }}>
                <textarea
                    placeholder="Nhập văn bản 1"
                    rows="6"
                    cols="50"
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                ></textarea>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <textarea
                    placeholder="Nhập văn bản 2"
                    rows="6"
                    cols="50"
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                ></textarea>
            </div>

            <button onClick={handleCompare} style={{ padding: "10px 20px", cursor: "pointer" }}>
                So sánh
            </button>

            {showDiff && (
                <div
                    style={{ marginTop: "30px", textAlign: "left" }}
                    dangerouslySetInnerHTML={{ __html: generateDiff(text1, text2) }}
                />
            )}
        </div>
    );
}

export default CompareText;
