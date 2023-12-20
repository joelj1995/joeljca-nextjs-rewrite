import Image from 'next/image';

import { ServiceItem } from "@/lib/model/vm-services";

import cms from '../../../assets/img/services/icons/cms.svg';
import asset from '../../../assets/img/services/icons/asset.svg';
import audit from '../../../assets/img/services/icons/audit.svg';
import banking from '../../../assets/img/services/icons/banking.svg';
import chart from '../../../assets/img/services/icons/chart.svg';
import cybersecurity from '../../../assets/img/services/icons/cybersecurity.svg';
import digital from '../../../assets/img/services/icons/digital.svg';
import finance from '../../../assets/img/services/icons/finance.svg';
import insurance from '../../../assets/img/services/icons/insurance.svg';
import marketing from '../../../assets/img/services/icons/marketing.svg';
import mobileapp from '../../../assets/img/services/icons/mobile-app.svg';
import operations from '../../../assets/img/services/icons/operations.svg';
import payments from '../../../assets/img/services/icons/payments.svg';
import rocket from '../../../assets/img/services/icons/rocket.svg';
import timer from '../../../assets/img/services/icons/timer.svg';
import websearch from '../../../assets/img/services/icons/web-search.svg';

type IconMap = { [key: string] : any };
const icons : IconMap = {
  "cms": cms,
  "asset": asset,
  "audit": audit,
  "banking": banking,
  "chart": chart,
  "cybersecurity": cybersecurity,
  "digital": digital,
  "finance": finance,
  "insurance": insurance,
  "marketing": marketing,
  "mobileapp": mobileapp,
  "operations": operations,
  "payments": payments,
  "rocket": rocket,
  "timer": timer,
  "websearch": websearch
};

interface ServiceItemProps extends ServiceItem { }

export default function ServiceItem(props: ServiceItemProps) {

  return (
    <div className="col py-4 my-2 my-sm-3">
      <div className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
        <div className="card-body pt-3">
          <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
            <Image src={ icons[props.icon] } alt={ props.name } width={ 40 } height={ 40 } />
          </div>
          <h2 className="h4 d-inline-flex align-items-center">
            { props.name }
            <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
          </h2>
          <p className="fs-sm text-body mb-0">
            { props.description }
          </p>
        </div>
      </div>
    </div>
  );

}