export default {
  data: () => ({
    editorOption: {
      theme: "snow",
      modules: {
        toolbar: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ],
      },
    },
    rules: {
      file_limit: (v) =>
        !v || v.size < 10000000 || "File should be less than 10MB.",
      num_only: (v) => {
        let p = /^[0-9]+$/g;
        return p.test(v) || "Numbers Only.";
      },
      money_only: (v) => {
        let p = /^[0-9]+$|^[0-9]+(.[0-9]{1,2}$)/g;
        return p.test(v) || "Enter a valid amount";
      },
      password_length: (v) =>
        (!!v && v.length >= 8) || "Password must be at least 8 characters",
      username: (v) => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
      userreg: (v) => {
        let namepatt = /^[a-z0-9_]{2,}[a-z_]+[\d]*$/;
        return (
          namepatt.test(v) ||
          "No captial letters. No special chars. Only Underscore"
        );
      },
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
};
