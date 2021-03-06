import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Check2 as CheckIcon } from '@emeraldplatform/ui-icons';
import Button from '../../../elements/Button';

export const Terms = ({ onAgree }) => {
  const style = {
    width: '100%',
    height: '250px',
    overflowY: 'scroll',
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <div style={style}>
          <p>
            End-User License Agreement for Webchain Wallet
          </p>
          <p>
            This End-User License Agreement ("EULA") is a legal agreement between you (either an individual or a single entity) and authors, including all contributors to the source code, ("AUTHORS") of this Software identified above, which includes computer software and may include associated media, printed materials, and “online” or electronic documentation (“SOFTWARE”).
          </p>
          <p>
            By installing, copying, or otherwise using the SOFTWARE, you agree to be bounded by the terms of this EULA. If you do not agree to the terms of this EULA, do not install or use the SOFTWARE.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, AND NO WARRANTY, EITHER EXPRESSED OR IMPLIED, IS GIVEN. YOUR USE OF THE SOFTWARE IS AT YOUR SOLE RISK. AUTHORS do not warrant that (i) the SOFTWARE will meet your specific requirements; (ii) the SOFTWARE is fully compatible with any particular platform; (iii) your use of the SOFTWARE will be uninterrupted, timely, secure, or error-free; (iv) the results that may be obtained from the use of the SOFTWARE will be accurate and/or reliable; (v) the quality of any products, services, information, or other material purchased or obtained by you through the SOFTWARE will meet your expectations; or (vi) any errors in the SOFTWARE will be corrected.
          </p>
          <p>
            YOU EXPRESSLY UNDERSTAND AND AGREE THAT AUTHORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF AUTHORS OR WEBCHAIN NETWORK MEMBERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) RELATED TO THE SOFTWARE, including, for example: (i) the use or the inability to use the SOFTWARE; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into, through or from the SOFTWARE; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third-party on the SOFTWARE; (v) or any other matter related to the SOFTWARE.
          </p>
        </div>
      </Grid>
      <Grid item xs style={{ paddingTop: '20px' }}>
        <Button
          label="I Agree"
          primary={true}
          icon={<CheckIcon />}
          onClick={onAgree} />
      </Grid>
    </Grid>
  );
};

export default Terms;
