import { Phone, Mail, Clock } from "lucide-react";

interface BranchContactCardProps {
  branchName: string;
  phone: string;
  email: string;
  workingHours: string;
}

export default function BranchContactCard({
  branchName,
  phone,
  email,
  workingHours,
}: BranchContactCardProps) {
  return (
    <div
      dir="rtl"
      className="
        w-full p-6 rounded-2xl
        bg-white dark:bg-[#0b1220]
        shadow-[0_10px_30px_rgba(15,30,80,0.12)]
        dark:shadow-none
        transition-all
        space-y-6
      "
    >
      {/* Header */}
      <h3
        className="
          text-xl font-bold
          text-[#0c21c8] dark:text-[#7d95ff]
        "
      >
        {branchName}
      </h3>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div
          className="
            w-10 h-10 rounded-full
            bg-[#e7edff] dark:bg-[#17203a]
            flex items-center justify-center
          "
        >
          <Phone className="w-5 h-5 text-[#0c21c8] dark:text-[#7d95ff]" />
        </div>

        <div>
          <p className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
            رقم الهاتف
          </p>
          <p
            className="font-medium text-[#111827] dark:text-[#e5e7eb]"
            dir="ltr"
          >
            {phone}
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div
          className="
            w-10 h-10 rounded-full
            bg-[#e7edff] dark:bg-[#17203a]
            flex items-center justify-center
          "
        >
          <Mail className="w-5 h-5 text-[#0c21c8] dark:text-[#7d95ff]" />
        </div>

        <div>
          <p className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
            البريد الإلكتروني
          </p>
          <p className="font-medium text-[#111827] dark:text-[#e5e7eb]">
            {email}
          </p>
        </div>
      </div>

      {/* Working Hours */}
      <div className="flex items-center gap-4 pt-2 border-t border-[#e5e7eb] dark:border-[#1e293b]">
        <div
          className="
            w-10 h-10 rounded-full
            bg-[#e7edff] dark:bg-[#17203a]
            flex items-center justify-center
          "
        >
          <Clock className="w-5 h-5 text-[#0c21c8] dark:text-[#7d95ff]" />
        </div>

        <div>
          <p className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
            ساعات العمل
          </p>
          <p className="font-medium text-[#111827] dark:text-[#e5e7eb]">
            {workingHours}
          </p>
        </div>
      </div>
    </div>
  );
}
