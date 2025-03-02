import { exec } from "child_process";

exec("nasm -v", (error, stdout, stderr) => {
    if (error) {
        console.error("❌ Error:", error.message);
        return;
    }
    console.log("✅ NASM Version:", stdout);
});
