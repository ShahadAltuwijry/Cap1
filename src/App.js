import "./App.css";
// import HardLevel from "./component/HardLevel";
// import MedLevel from "./component/MedLevel";
import EasyLevel from "./component/EasyLevel";

function App() {
  return (
    <div>
      {/* <HardLevel /> */}
      {/* <MedLevel /> */}
      <EasyLevel />
    </div>
  );

  //هنا عشان نسوي الانتقال للمراحل،
  // نحط بتن اون كلك يفتح رابط ونحط لكل صفحة مستوى راوت على حسب الاسم
  //وبعدين لما يضغط على البتن راح يغير الرابط وينقل اللاعب لصفحة المستوى المُختار
}

export default App;
