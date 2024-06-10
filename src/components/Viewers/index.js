import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer";

const MyViewer = () => {

    const docs = [
        { uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", fileType: "pdf", },
    ];

    return <DocViewer documents={docs} pluginRenderers={[PDFRenderer]} />

}

export default MyViewer