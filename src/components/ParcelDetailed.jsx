// NPM packages
import { useTranslation } from "react-i18next";

// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";
import DateTime from "./DateTime";
import Map from "./Map";

export default function ParcelDetailed({ information }) {
  // Const
  const { t, i18n } = useTranslation();

  const coordinates = [
    information.location_coordinate_latitude,
    information.location_coordinate_longitude,
  ];

  return (
    <div className="ParcelDetailed">
      <StatusIcon orderStatus={information.status} />
      <p className="data-label">{t("parcelView.sender")}</p>
      <p className="data-actual">{information.sender}</p>
      <p className="data-label">{t("parcelView.status")}</p>
      <StatusWording orderStatus={information.status} />
      <p className="data-label">{t("parcelView.eta")}</p>
      <DateTime dateString={information.eta} />
      <p className="data-label">{t("parcelView.id")}</p>
      <p className="data-actual">{information.parcel_id}</p>
      <p className="data-label">{t("parcelView.location")}</p>
      <p className="data-actual">{information.location_name}</p>
      <Map coordinates={coordinates} />
      <p className="data-label">{t("parcelView.phone")}</p>
      <p className="data-actual">{information.user_phone}</p>
      <p className="data-label">{t("parcelView.verification")}</p>
      {information.verification_required ? (
        <p className="data-actual">{t("parcelView.yes")} </p>
      ) : (
        <p className="data-actual">{t("parcelView.no")}</p>
      )}
      <p className="data-label">{t("parcelView.notes")}</p>
      {information.notes != null ? (
        <p className="data-actual">{information.notes}</p>
      ) : (
        <p className="data-actual">{t("parcelView.none")}</p>
      )}
      <p className="data-label">{t("parcelView.updated")}</p>
      <DateTime dateString={information.last_updated} />
    </div>
  );
}
