# مجلد المستندات

- `resume.pdf` — ملف مؤقت (Placeholder). استبدله بسيرتك الذاتية الحقيقية بنفس الاسم بالضبط:
  `docs/resume.pdf`.

- **لديك أكثر من سيرة ذاتية (كل واحدة لمجال تخصص)؟** ضع كل ملف PDF هنا باسم مختلف
  (مثلاً `resume-iot.pdf`, `resume-ai.pdf`) ثم سجّلها في `data/cvs.json`. كل سيرة تظهر كبطاقة
  منفصلة بزر تحميل خاص بها في نافذة **CVs** بالبورتفوليو — بدون أي تعديل في الكود.

- يمكنك أيضاً إضافة مستندات مشاريع هنا (شهادات، عروض تقديمية PDF...) وربطها بأي مشروع عبر حقل
  `"docs"` داخل `data/projects.json`، مثال:

```json
{
  "name": "AI-Powered Smart Irrigation",
  "docs": "docs/smart-irrigation-report.pdf"
}
```
